import React, { Component } from "react";
import Layout from "../CommonComponent/Layout";
import { Typography } from "antd";
import * as style from "./index.module.less";
import { Link } from "gatsby";
const { Text, Title } = Typography;

export class App extends Component {
  render() {
    return (
      <Layout>
        <div className={style.banner}>
          <div className={style.container}>
            <div className={style.leftSection}>
              <Text style={{ fontSize: "18px" }} type="secondary">
                A digital company provide you all kind of online services!
              </Text>
              <h1>
                <span>Digital Agency,</span>
              </h1>
              <h1>
                <span>Creative People,</span>
              </h1>
              <h1>
                <span>Crazy Template.</span>
              </h1>
              <div style={{ marginTop: "25px" }}>
                <Link to={"/"} className={style.btn}>
                  Explore more
                </Link>
              </div>
            </div>
            <div className={style.rightSection}>
              <img
                className={style.shape1}
                src="https://assets.website-files.com/5aafd5b167150a6f051ab605/5e82165f177d9593c86c54a4_shq.png"
                alt=""
              />
              <img
                className={style.shape2}
                src="https://assets.website-files.com/5aafd5b167150a6f051ab605/5aafee1e67150a1e9c1ae4d9_shape-6.svg"
                alt=""
              />
            </div>
          </div>
          <img
            className={style.shape3}
            src="https://assets.website-files.com/5aafd5b167150a6f051ab605/5aafe6fd5e683a7ec31e3b7a_shape-2.svg"
            alt=""
          />
          <img
            className={style.shape4}
            src="https://assets.website-files.com/5aafd5b167150a6f051ab605/5aaffd435e683a3dcf1e6829_shape-3.svg"
            alt=""
          />
          {/* <img
            className={style.shape5}
            src="https://assets.website-files.com/5aafd5b167150a6f051ab605/5aafea2067150adf931ada89_shape-4.svg"
            alt=""
          /> */}
        </div>

        <div className={style.titleWrapper}>
          <img
            className={style.alignCenter}
            src="https://assets.website-files.com/5aafd5b167150a6f051ab605/5ab008c65e683ae1721e7f36_icons8-web-design-500%203.png"
            alt=""
          />
          <Title>Think The Design, Design The Thinking</Title>
          <Text type="secondary">
            {`The thing that motivates me is a very common form of motivation. And
            that is, with other folk counting on me, it's so easy to be
            motivated. We work with business & provide solution to client with
            their business problem`}
          </Text>
          <div className={style.ceoImage}></div>
          <Title className={style.ceoName} level={4}>
            Marina Johnson
          </Title>
          <Text type="secondary">CEO Founder of unAgency</Text>
          <div className={style.signFont}>Marina jns</div>
        </div>

        <div style={{ marginTop: "120px " }} className={style.section}>
          <Title>Top Services</Title>
        </div>
      </Layout>
    );
  }
}

export default App;
