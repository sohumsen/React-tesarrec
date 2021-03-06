import React, { Component } from "react";

import RightContent from "../RightContent/RightContent";
import classes from "./HeatMapFormMES.module.css";
import OverallReactionAnodeCathode from "../../../../../components/Calculations/Sustainability/MES/OverallReactionAnodeCathodeHeatMapMES";
class HeatMapForm extends Component {
  state = {
    HeatMapState: {
      xLabels: [
        "Acetate",
        "Glucose",
        "Lactate",
        "Propionate",
        "Pyruvate",
        "Sucrose",
      ],
      yLabels: [
        "Acetic acid",
        "Butyric acid",
        "Caproic acid",
        "Formic acid",
        "Propionic acid",
        "Valeric acid",
      ],
      data: null,
    },

    AnodeSubstrateChemical: "Acetate",
    CathodeProductChemical: "Acetic acid",
    xCoordAnode: 0,
    yCoordCathode: 0,
    chosenValue: "",

    AnodeSubstrateConcentration: 10,
    Volume: 10,
    efficiencyValue: 1,

    CCGT: 0,
    Nuclear: 100,
    Biomass: 100,
    Coal: 0,
    Wind: 100,
    Solar: 100,
    Oil: 0,
    OCGT: 0,
    Hydroelectric: 100,
    PumpedHydro: 100,
    Other: 100,

    AnodeCost: 15,
    CathodeCost: 15,
    MembraneCost: 440,
    CurrentCollectorCost: 28,

    AnolyteCost: 0.0012,
    CatholyteCost: 0.5,
    ExternalEnergyCost: 0.15,
    LangFactorCost: 4.75,
    ACCCost: 0.13,
    ProductionPriceCost: 0.024,
    IRRCost: 0.12,
  };

  HeatMapChangedOnClick = (x, y, value) => {
    this.setState({
      xCoordAnode: x,
      yCoordCathode: y,
      AnodeSubstrateChemical: this.state.HeatMapState.xLabels[x],
      CathodeProductChemical: this.state.HeatMapState.yLabels[y],
      chosenValue: value,
    });
  };

  SliderhandleChange = (name) => (event, value) => {
    this.setState({ [name]: value });
  };

  InputhandleChange = (name) => (event) => {
    let { value, max } = event.target;

    if (+value > +max) {
      value = max;
    }

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={classes.Container}>
    

        <div className={classes.HeatMaps}>
          <OverallReactionAnodeCathode
            cathodeProduct={this.state.CathodeProductChemical}
            anodeSubstrate={this.state.AnodeSubstrateChemical}
            concentration={this.state.AnodeSubstrateConcentration}
            volume={this.state.Volume}
            efficiency={this.state.efficiencyValue}
            heatMapContents={this.state.HeatMapState}
            HeatMapChangedOnClick={this.HeatMapChangedOnClick}
            CCGT={this.state.CCGT}
            Nuclear={this.state.Nuclear}
            Biomass={this.state.Biomass}
            Coal={this.state.Coal}
            Wind={this.state.Wind}
            Solar={this.state.Solar}
            Oil={this.state.Oil}
            OCGT={this.state.OCGT}
            Hydroelectric={this.state.Hydroelectric}
            PumpedHydro={this.state.PumpedHydro}
            Other={this.state.Other}
            AnodeCost={this.state.AnodeCost}
            CathodeCost={this.state.CathodeCost}
            MembraneCost={this.state.MembraneCost}
            CurrentCollectorCost={this.state.CurrentCollectorCost}
            AnolyteCost={this.state.AnolyteCost}
            CatholyteCost={this.state.CatholyteCost}
            ExternalEnergyCost={this.state.ExternalEnergyCost}
            LangFactorCost={this.state.LangFactorCost}
            ACCCost={this.state.ACCCost}
            ProductionPriceCost={this.state.ProductionPriceCost}
            IRRCost={this.state.IRRCost}
            xCoordAnode={this.state.xCoordAnode}
            yCoordCathode={this.state.yCoordCathode}
          />
        </div>
        <div className={classes.RightContent}>
          <RightContent
            AnodeSubstrateChemical={this.state.AnodeSubstrateChemical}
            CathodeProductChemical={this.state.CathodeProductChemical}
            chosenValue={this.state.chosenValue}
            AnodeSubstrateConcentration={this.state.AnodeSubstrateConcentration}
            Volume={this.state.Volume}
            efficiencyValue={this.state.efficiencyValue}
            SliderhandleChange={(val) => this.SliderhandleChange(val)}
            InputhandleChange={(val) => this.InputhandleChange(val)}
            CCGT={this.state.CCGT}
            Nuclear={this.state.Nuclear}
            Biomass={this.state.Biomass}
            Coal={this.state.Coal}
            Wind={this.state.Wind}
            Solar={this.state.Solar}
            Oil={this.state.Oil}
            OCGT={this.state.OCGT}
            Hydroelectric={this.state.Hydroelectric}
            PumpedHydro={this.state.PumpedHydro}
            Other={this.state.Other}
            MES={true}
            AnodeCost={this.state.AnodeCost}
            CathodeCost={this.state.CathodeCost}
            MembraneCost={this.state.MembraneCost}
            CurrentCollectorCost={this.state.CurrentCollectorCost}
            AnolyteCost={this.state.AnolyteCost}
            CatholyteCost={this.state.CatholyteCost}
            ExternalEnergyCost={this.state.ExternalEnergyCost}
            LangFactorCost={this.state.LangFactorCost}
            ACCCost={this.state.ACCCost}
            ProductionPriceCost={this.state.ProductionPriceCost}
            IRRCost={this.state.IRRCost}
          />
        </div>
      </div>
    );
  }
}

export default HeatMapForm;
