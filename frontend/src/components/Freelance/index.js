import React, { useState, useEffect, useContext } from 'react'
import Spinner from "../Spinner/index";

import {
    CardsHeader,
    NumberOfFreelance,
    Input,
    Card,
    Img,
    Panel,
    Title,
    Price,
    FreelanceName,
    Breaker,
    CircularWrapper,
    CompetenceWrapper,
    Competence,
    LinkToProfile,
} from "./freelanceElements";

const FreelanceGrid = ({userContext}) => {
    const [items, setItems] = useState([])
    const [freelance, setFreelance] = useState(items.filter((el) => el.user_isFreelance === true))
    const [search, setSearch] = useState("");
    const [filteredFreelance, setFilteredFreelance] = useState([]);
    const { token, setToken } = useContext(userContext);
    let numberOfFreelance = filteredFreelance.length;

    const fetchFreelance = async () => {
      const data = await fetch('http://localhost:4000/users');
      const items = await data.json()
      const freelance = await items.filter(el => el.user_isFreelance === true)
      console.log(items, 'je suis items')
      setItems(items)
      console.log(freelance, "je suis freelance filtré");
    };

    useEffect(() => {
      fetchFreelance();
    }, []);

    useEffect(() => {
      setFilteredFreelance(
        items
          .filter((el) => el.user_isFreelance === true)
          .filter(
            (el) =>
              (el.user_first_name + " " + el.user_last_name)
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              el.freelance_id.freelance_title
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              el.freelance_id.freelance_tarif
                .toLowerCase()
                .includes(search.toLowerCase()) 
              /* el.freelance_id
                .map((element) => element.freelance_competences)
                .toLowerCase()
                .includes(search.toLowerCase()) */
          )
      );
    }, [items,search, freelance]);
    
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%",
        }}
      >
        <CardsHeader>
          <div>
            <NumberOfFreelance>
              {numberOfFreelance === 0
                ? `Aucun Freelance "${search}" Disponible`
                : search === ""
                ? ` ${numberOfFreelance} Freelances Disponibles`
                : ` ${numberOfFreelance} Freelances "${search}" Disponibles`}{" "}
            </NumberOfFreelance>
          </div>
          <Input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Trouvez votre Freelance"
          ></Input>
        </CardsHeader>
        {items.length === 0 ? (
          <CircularWrapper>
            <Spinner />
          </CircularWrapper>
        ) : (
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "flex-start",
            }}
          >
            {filteredFreelance.map((item, key) => (
              <LinkToProfile
                key={key}
                to={
                  token
                    ? {
                        pathname: "/freelance/profile/" + item._id,
                        state: { freelance: item },
                      }
                    : {
                        pathname: "/login",
                        state: {
                          previousPath: "/freelance/profile/" + item._id,
                          freelance: item,
                        },
                      }
                }
              >
                <FreelanceCards item={item} />
              </LinkToProfile>
            ))}
          </div>
        )}
      </div>
    );
    
}

const FreelanceCards = ({ item }) => {
  const name = item.user_first_name + " " + item.user_last_name;
  return (
    <Card key={item._id}>
      {item.user_img_url != null ? (
        <Img src={item.user_img_url} key={item._id} />
      ) : (
        <Img src={"images/AnonymeProfileImage.png"} key={item._id} />
      )}
      <Panel key={item._id + "2"}>
        <FreelanceName key={item._id + "3"}>{name}</FreelanceName>
        <Title key={item._id + "4"}>{item.freelance_id.freelance_title}</Title>
        <Breaker key={item._id + "5"} />
        <CompetenceWrapper key={item._id + "6"}>
          {item.freelance_id.freelance_competences.length > 4
            ? item.freelance_id.freelance_competences
                .slice(0, 3)
                .map((chip, key) => (
                  <Competence label={chip} key={key} variant="outlined" />
                ))
            : item.freelance_id.freelance_competences.map((chip, key) => (
                <Competence key={key + "1"} label={chip} variant="outlined" />
              ))}
          {item.freelance_id.freelance_competences.length > 3 ? (
            <Competence
              key={item._id + "10"}
              label={"+" + (item.freelance_id.freelance_competences.length - 3)}
              variant="outlined"
            />
          ) : (
            <div></div>
          )}
        </CompetenceWrapper>

        <Price>A partir de {item.freelance_id.freelance_tarif}DA</Price>
      </Panel>
    </Card>
  );
};

export default FreelanceGrid
