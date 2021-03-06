import React, { Component } from "react";
import classes from "./RightContent.module.css";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import MySliderContainer from "../../../../../components/UI/SliderContainer/SliderContainer";

import SliderWithText from "../../../../../components/UI/SliderContainer/Slider/SliderWithText";

const PurpleSwitch = withStyles({
  switchBase: {
    color: "black",
    "&$checked": {
      color: "black",
    },
    "&$checked + $track": {
      backgroundColor: "black",
    },
  },
  checked: {},
  track: {},
})(Switch);
class RightContent extends Component {
  state = {
    showSocialSliders: true,
  };

  showEnergySliderHandler = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };
  render() {
    let socialSliders = null;

    if (this.state.showSocialSliders) {
      socialSliders = (
        <MySliderContainer>
          <h3>Social (UK)</h3>
          <SliderWithText
            rootWidth={"50%"}
            inputWidth={72}
            displayCaption={"Proportion import from Denmark"}
            value={this.props.ProportionImportDenmark}
            displayValue={this.props.ProportionImportDenmark}
            lowestVal={0}
            highestVal={1}
            SliderhandleChange={this.props.SliderhandleChange(
              "ProportionImportDenmark"
            )}
            InputhandleChange={this.props.InputhandleChange(
              "ProportionImportDenmark"
            )}
          />
          <SliderWithText
            rootWidth={"50%"}
            inputWidth={72}
            displayCaption={"Proportion import from Ireland"}
            value={this.props.ProportionImportIreland}
            displayValue={this.props.ProportionImportIreland}
            lowestVal={0}
            highestVal={1}
            SliderhandleChange={this.props.SliderhandleChange(
              "ProportionImportIreland"
            )}
            InputhandleChange={this.props.InputhandleChange(
              "ProportionImportIreland"
            )}
          />

          <SliderWithText
            rootWidth={"50%"}
            inputWidth={72}
            displayCaption={"Proportion import from Belgium"}
            value={this.props.ProportionImportBelgium}
            displayValue={this.props.ProportionImportBelgium}
            lowestVal={0}
            highestVal={1}
            SliderhandleChange={this.props.SliderhandleChange(
              "ProportionImportBelgium"
            )}
            InputhandleChange={this.props.InputhandleChange(
              "ProportionImportBelgium"
            )}
          />
          <SliderWithText
            rootWidth={"50%"}
            inputWidth={72}
            displayCaption={"Proportion import from Netherlands"}
            value={this.props.ProportionImportNetherlands}
            displayValue={this.props.ProportionImportNetherlands}
            lowestVal={0}
            highestVal={1}
            SliderhandleChange={this.props.SliderhandleChange(
              "ProportionImportNetherlands"
            )}
            InputhandleChange={this.props.InputhandleChange(
              "ProportionImportNetherlands"
            )}
          />
          <SliderWithText
            rootWidth={"50%"}
            inputWidth={72}
            displayCaption={"Proportion import from France"}
            value={this.props.ProportionImportFrance}
            displayValue={this.props.ProportionImportFrance}
            lowestVal={0}
            highestVal={1}
            SliderhandleChange={this.props.SliderhandleChange(
              "ProportionImportFrance"
            )}
            InputhandleChange={this.props.InputhandleChange(
              "ProportionImportFrance"
            )}
          />
        </MySliderContainer>
      );
    }
    return (
      <div className={classes.RightContent}>
        <h2>Settings</h2>
        <br />

        <MySliderContainer>
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Electricity demand GWh/year "}
            value={this.props.ElectricityDemand}
            InputhandleChange={this.props.InputhandleChange(
              "ElectricityDemand"
            )}
            lowestVal={1}
            highestVal={10}
            SliderhandleChange={this.props.SliderhandleChange(
              "ElectricityDemand"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Biomass moisture content wt% "}
            value={this.props.BiomassMoistureContent}
            InputhandleChange={this.props.InputhandleChange(
              "BiomassMoistureContent"
            )}
            lowestVal={0}
            highestVal={25}
            SliderhandleChange={this.props.SliderhandleChange(
              "BiomassMoistureContent"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Biomass carbon content (dry basis)"}
            value={this.props.BiomassCarbonContent}
            InputhandleChange={this.props.InputhandleChange(
              "BiomassCarbonContent"
            )}
            lowestVal={51.5}
            highestVal={53.5}
            SliderhandleChange={this.props.SliderhandleChange(
              "BiomassCarbonContent"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Biomass hydrogen content (dry basis) wt% "}
            value={this.props.BiomassHydrogenContent}
            InputhandleChange={this.props.InputhandleChange(
              "BiomassHydrogenContent"
            )}
            lowestVal={5.5}
            highestVal={6.5}
            SliderhandleChange={this.props.SliderhandleChange(
              "BiomassHydrogenContent"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Biomass calorific value (wet basis) MJ/kg "}
            value={this.props.BiomassCalorificValue}
            InputhandleChange={this.props.InputhandleChange(
              "BiomassCalorificValue"
            )}
            lowestVal={17}
            highestVal={20}
            SliderhandleChange={this.props.SliderhandleChange(
              "BiomassCalorificValue"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Boiler efficiency "}
            value={this.props.BoilerEfficiency}
            InputhandleChange={this.props.InputhandleChange("BoilerEfficiency")}
            lowestVal={0.7}
            highestVal={1}
            SliderhandleChange={this.props.SliderhandleChange(
              "BoilerEfficiency"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={
              "Isentropic efficiency of back pressure steam turbine "
            }
            value={this.props.IsentropicEfficiency}
            InputhandleChange={this.props.InputhandleChange(
              "IsentropicEfficiency"
            )}
            lowestVal={0.7}
            highestVal={1}
            SliderhandleChange={this.props.SliderhandleChange(
              "IsentropicEfficiency"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={
              "Mechanical efficiency of back pressure steam turbine"
            }
            value={this.props.MechanicalEfficiency}
            InputhandleChange={this.props.InputhandleChange(
              "MechanicalEfficiency"
            )}
            lowestVal={0.7}
            highestVal={1}
            SliderhandleChange={this.props.SliderhandleChange(
              "MechanicalEfficiency"
            )}
          />

          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Installation factor"}
            value={this.props.LangFactor}
            InputhandleChange={this.props.InputhandleChange("LangFactor")}
            lowestVal={1}
            highestVal={5}
            SliderhandleChange={this.props.SliderhandleChange("LangFactor")}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Annual capital charge "}
            value={this.props.AnnualCapitalCharge}
            InputhandleChange={this.props.InputhandleChange(
              "AnnualCapitalCharge"
            )}
            lowestVal={0.05}
            highestVal={0.15}
            SliderhandleChange={this.props.SliderhandleChange(
              "AnnualCapitalCharge"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Electricity price (€/kWh) "}
            value={this.props.ElectricityPrice}
            InputhandleChange={this.props.InputhandleChange("ElectricityPrice")}
            lowestVal={0.05}
            highestVal={0.15}
            SliderhandleChange={this.props.SliderhandleChange(
              "ElectricityPrice"
            )}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Steam price (€/tonne)"}
            value={this.props.SteamPrice}
            InputhandleChange={this.props.InputhandleChange("SteamPrice")}
            lowestVal={20}
            highestVal={25}
            SliderhandleChange={this.props.SliderhandleChange("SteamPrice")}
          />

          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"Biomass Cost (€/tonne)"}
            value={this.props.BiomassCost}
            lowestVal={0}
            highestVal={100}
            SliderhandleChange={this.props.SliderhandleChange("BiomassCost")}
            InputhandleChange={this.props.InputhandleChange("BiomassCost")}
          />
          <SliderWithText
            rootWidth={"90%"}
            inputWidth={72}
            displayCaption={"IRR "}
            value={this.props.IRRCost}
            lowestVal={0.05}
            highestVal={0.15}
            SliderhandleChange={this.props.SliderhandleChange("IRRCost")}
            InputhandleChange={this.props.InputhandleChange("IRRCost")}
          />

          <FormControlLabel
            control={
              <PurpleSwitch
                checked={this.state.showSocialSliders}
                onChange={this.showEnergySliderHandler}
                name="showSocialSliders"
                color="primary"
              />
            }
            label="Social"
            labelPlacement="start"
          />

          {this.state.showSocialSliders ? (
            <div className={classes.sliders}>{socialSliders}</div>
          ) : null}
        </MySliderContainer>
      </div>
    );
  }
}
export default RightContent;
