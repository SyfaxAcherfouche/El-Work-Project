import React from 'react'
import { Menu } from 'antd';
import {
  TranslationOutlined,
  CodeOutlined,
  TagsOutlined,
  HighlightOutlined,
  CameraOutlined
} from "@ant-design/icons";
import { SousMenu } from './SiderElements'


function handleClick(e) {
    console.log('click', e);
}

const FreelanceSidebar = () => {
        return (
          <>
            <Menu
              onClick={handleClick}
              style={{ width: "100%", height: "100%" }}
              mode="vertical"
              theme="light"
            >
              <SousMenu
                key="sub1"
                icon={<CodeOutlined />}
                title="Développement"
              >
                <Menu.Item key="1" gold>
                  Développeurs Front-End
                </Menu.Item>
                <Menu.Item key="2">Développeurs Back-End</Menu.Item>
                <Menu.Item key="3">Développeurs Full-Stack</Menu.Item>
                <Menu.Item key="4">Développeurs Mobile</Menu.Item>
                <Menu.Item key="5">Développeurs CMS</Menu.Item>
                <Menu.Item key="6">Intégrateurs Web </Menu.Item>
              </SousMenu>
              <SousMenu
                key="sub2"
                icon={<HighlightOutlined />}
                title="Graphisme & Design"
              >
                <Menu.Item key="7">Infographiste</Menu.Item>
                <Menu.Item key="8">Webdesigner</Menu.Item>
                <Menu.Item key="9">Illustrateur</Menu.Item>
                <Menu.Item key="10">UX Designer</Menu.Item>
                <Menu.Item key="11">UI Designer</Menu.Item>
                <Menu.Item key="12">Montion Design</Menu.Item>
                <Menu.Item key="12">Modélisation 2D & 3D</Menu.Item>
              </SousMenu>
              <SousMenu
                key="sub3"
                icon={<TagsOutlined />}
                title="Marketing Digital"
              >
                <Menu.Item key="13">Réseaux sociaux</Menu.Item>
                <Menu.Item key="14">Stratégie de communication</Menu.Item>
                <Menu.Item key="15">Rédaction Web</Menu.Item>
                <Menu.Item key="16">Marketing de contenu</Menu.Item>
                <Menu.Item key="17">Rédaction SEO</Menu.Item>
                <Menu.Item key="18">Wordpress</Menu.Item>
                <Menu.Item key="19">Google Analytics</Menu.Item>
                <Menu.Item key="20">Community Manager</Menu.Item>
                <Menu.Item key="21">Influenceur</Menu.Item>
              </SousMenu>
              <SousMenu key="sub4" icon={<CameraOutlined />} title="Visual Art">
                <Menu.Item key="22">Photographe</Menu.Item>
                <Menu.Item key="23">Réalisateur Vidéo</Menu.Item>
                <Menu.Item key="24">Monteur Vidéo</Menu.Item>
              </SousMenu>
              <SousMenu
                key="sub5"
                icon={<TranslationOutlined />}
                title="Rédaction & Traduction"
              >
                <Menu.Item key="25">Concepteur Rédacteur</Menu.Item>
                <Menu.Item key="26">Traducteur</Menu.Item>
                <Menu.Item key="27">Relecture & Corrections</Menu.Item>
              </SousMenu>
            </Menu>
          </>
        );
}

export default FreelanceSidebar


