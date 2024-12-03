import React from "react";
import { Nav } from "../components/nav";
import styles from "./price.module.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { Footer } from "../components/footer";
const page = () => {
  const items = [
    { text: "Integrated Email", icon: "fa-duotone fa-solid fa-check" },
    { text: "Team Collaboration Tools", icon: "fa-duotone fa-solid fa-check" },
    { text: "Workflow and To-Do List", icon: "fa-duotone fa-solid fa-check" },
    { text: "Billing and Payment", icon: "fa-duotone fa-solid fa-check" },
    { text: "User", icon: "fa-duotone fa-solid fa-check" },
  ];
  const items2 = [
    {
      text: "automatic client reminders",
      icon: "fa-duotone fa-solid fa-check",
    },
    { text: "task automation", icon: "fa-duotone fa-solid fa-check" },
    { text: "industry integrations", icon: "fa-duotone fa-solid fa-check" },
    {
      text: "time tracking and budget reporting",
      icon: "fa-duotone fa-solid fa-check",
    },
  ];

  return (
    <div>
      <div className={styles.box}>
        <div>
          <Nav />
        </div>

        <p className={styles.price}>Home /Pricing</p>
        <p className={styles.pricing}>Pricing</p>
      </div>

      <div className={styles.pkg}>
        <div className={styles.card}>
          <p className={styles.practice}>
            practice management for accounting firm
          </p>
          <p className={styles.practicebold}>
            practice management plans for accounting firms
          </p>
          <p className={styles.saved}>
            $23,130 saved per employee, per year for average customer its not
            surprise carbon is the no 1 accounting practice management software
            on G2
          </p>
        </div>

        <div className={styles.pakage}>
          <div className={styles.card1}>
            <p className={styles.paid1}>Team</p>
            <p className={styles.paid2}>34 dollor per month,user paid anualy</p>
            <p className={styles.paid3}>34 dollor per month,user paid anualy</p>
            <p className={styles.paid4}>
              Essential work flow and collabration tools for small accounting
              firms
            </p>

            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                  <li key={index} className={styles.order}>
                    <i
                      className={item.icon}
                      style={{ marginRight: "10px", marginTop: "10px" }}
                    >
                      <div className={styles.line}></div>
                    </i>
                    {item.text}
                  </li>
                ))}
                <button type="submit" className={styles.button}>
                  Get Started
                </button>
              </ul>
            </div>
          </div>

          <div className={styles.card1}>
            <p className={styles.paid1}>Business</p>
            <p className={styles.paid2}>49 dollor per month,user paid anualy</p>
            <p className={styles.paid3}>34 dollor per month,user paid anualy</p>
            <p className={styles.paid4}>
              Essential work flow and collabration tools for small accounting
              firms
            </p>
            <div className={styles.line}></div>

            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items2.map((item, index) => (
                  <li key={index} className={styles.order}>
                    <i
                      className={item.icon}
                      style={{ marginRight: "10px", marginTop: "10px" }}
                    >
                      <div className={styles.line}></div>
                    </i>
                    {item.text}
                  </li>
                ))}
                <button type="submit" className={styles.button}>
                  {" "}
                  Get Started
                </button>
              </ul>
            </div>
          </div>

          <div className={styles.card1}>
            <p className={styles.paid1}>Enterprices</p>
            <p className={styles.paid2}>Custom Pricing</p>
            <p className={styles.paid3}>
              collaboration,security and reporting tools for large accounting
              firms
            </p>
            <p className={styles.paid4}>
              includes everything in team and business plus
            </p>
            <div className={styles.line}></div>

            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                  <li key={index} className={styles.order}>
                    <i
                      className={item.icon}
                      style={{ marginRight: "10px", marginTop: "10px" }}
                    >
                      <div className={styles.line}></div>
                    </i>
                    {item.text}
                  </li>
                ))}
                <button type="submit" className={styles.button}>
                  Contact Us
                </button>
              </ul>
            </div>
          </div>
        </div>
       
       <div className={styles.box2}>
       <div className={styles.center}>
            <h2 className={styles.h2}>All Plans Include</h2>
          </div>
        <div className={styles.wrap}>
          

          <div className={styles.block}>
            <p className={styles.text1}>Email Traigle</p>
            <p className={styles.text2}>
              share assign and comment on email accross your team
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.text1}>team collaboration</p>
            <p className={styles.text2}>
            collaborate in the context of work, email, tasks and clients
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.text1}>poweful workflow</p>
            <p className={styles.text2}>
            assign tasks, create work from templates, schedules, jobs,and view dashboards 
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.text1}>documents management</p>
            <p className={styles.text2}>
            automatically store and organize documents against client and jobs
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.text1}>client portal</p>
            <p className={styles.text2}>
            Collaborate with clients in one streamlined workflow with tasks and document sharing
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.text1}>client management</p>
            <p className={styles.text2}>
            share contact profiles,activity timelines, and automated client requests
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.text1}>Email Traigle</p>
            <p className={styles.text2}>
              share assign and comment on email accross your team
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.text1}>billings and payments</p>
            <p className={styles.text2}>
            flexible billing and faster payments, built into your workflow
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.text1}>ecosystem integrations</p>
            <p className={styles.text2}>
            integrate with the suite of apps to streamline data and automate process
            </p>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
