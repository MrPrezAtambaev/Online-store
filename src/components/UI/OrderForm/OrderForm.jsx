import React from "react";
import "./OrderForm.css";

const OrderForm = () => {
  return (
    <section className="Section_wrapper__E_SgI Section_m__q5kgl">
      <div className="Newsletter_wrapper__GyVHf">
        <div className="Newsletter_form-wrapper__HCLU_">
          <form className="form-right">
            <h3 className="Newsletter_title__TIObJ">
              Enjoy 10% off your first order
            </h3>
            <p className="Newsletter_intro__aoe8w">
              The world of superior sound awaits... Enjoy tailor-made content
              like product news, exclusive discounts &amp;rewards, the latest
              offers and more sent directly to your inbox.
            </p>
            <fieldset className="Newsletter_fieldset__LrGJr Newsletter_inputs__ZuIBU">
              <div className="Input_wrapper__np2yN Newsletter_input__xw21X">
                <div className="Input_container__bbnax">
                  <input
                    className="Input_input__vnemL Input_font-s__usSDA primary Newsletter_input__xw21X"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  {/* <label
                    className="Input_label__ifeaq Input_font-xxs__FX_lm"
                    htmlFor="email"
                  >
                    Email
                  </label> */}
                </div>
              </div>
            </fieldset>
            <div className="Newsletter_action__qexV9">
              <fieldset className="Newsletter_fieldset__LrGJr Newsletter_privacy__D62jk">
                <div>
                  <input
                    type="checkbox"
                    className="Checkbox_container__c1xoX Newsletter_checkbox__YMauP"
                    id="form-request"
                    name="terms"
                    value="terms"
                  />
                </div>
                <label
                  className="Newsletter_label__YFNQN Newsletter_font-s__zD49a"
                  htmlFor="form-request"
                >
                  <p className="paragraph">
                    By subscribing, I agree to receive marketing information,
                    product news and promotional offers by email.
                    <b className="Newsletter_required__M2zaV">*</b>
                  </p>
                </label>
              </fieldset>
              <fieldset className="Newsletter_fieldset__LrGJr Newsletter_privacy__D62jk">
                <div>
                  <input
                    type="checkbox"
                    className="Checkbox_container__c1xoX Newsletter_checkbox__YMauP"
                    id="form-terms2"
                    name="terms2"
                    value="terms2"
                  />
                </div>
                <label
                  className="Newsletter_label__YFNQN Newsletter_font-s__zD49a"
                  htmlFor="form-terms2"
                >
                  <p className="paragraph">
                    To receive updates on services designed and tailored htmlFor
                    me based on my experience, interests or preferences, I
                    consent to the processing of my personal data htmlFor
                    marketing and profiling purposes.
                  </p>
                </label>
              </fieldset>
              <div className="Newsletter_label__YFNQN Newsletter_font-s__zD49a">
                <p className="paragraph">
                  Personal data will be stored and processed according to the{" "}
                  <a
                    className="Link_link__AEhe8 RichTextBlock_link__MFNap"
                    title="Privacy Notice"
                    href="https://www.sennheiser-hearing.com/privacy/"
                  >
                    Privacy Notice
                  </a>
                  . Consents can be revoked at any time.
                </p>
              </div>
              <button
                type="submit"
                className="Cta_cta__yXuy4 Cta_button__dfcR_ Cta_primarysmall__g1tzj Newsletter_submit__DM5yu"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="Newsletter_image-wrapper__SmXSn">
          <div
            className="Image_cover__i0Wfj graphcms-image-outer-wrapper"
            style={{ zIndex: 0, position: "relative" }}
          >
            <div
              className=" graphcms-image-wrapper"
              style={{ position: "relative", overflow: "hidden", zIndex: 1 }}
            >
              <div style={{ width: "100%", paddingBottom: "110.25%" }}></div>
              <img
                alt=""
                title=""
                src="https://media.graphassets.com/resize=w:1000,fit:crop/quality=value:65/auto_image/compress/0cREX0cKTyC3JBCpNMXQ"
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease",
                  transitionProperty: "opacity",
                  opacity: "1",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
