import { Component } from "react";
import "./App.css";
import Form from "./component/form/form";

class App extends Component {
  constructor(props) {
    super(props);

    this.calcGuestConsuption = this.calcGuestConsuption.bind(this);
    this.calcFixedAptConsumption = this.calcFixedAptConsumption.bind(this);
    this.calcFixedAptCost = this.calcFixedAptCost.bind(this);
    this.calcGuestAptCost = this.calcGuestAptCost.bind(this);
    this.onUpdate = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      apartmentType: "2",
      noOfguests: "",
      corpRatio: "",
      borewellRatio: "",
      totalWaterConsumed: "",
      totalCost: "",
    };
  }

  setStateOfForm = (id, value) => {
    this.onUpdate = true;
    this.setState(() => {
      return { [id]: value };
    });
  };

  calcGuestConsuption = (noOfguests) => {
    return noOfguests * 10 * 30;
  };
  calcFixedAptConsumption = (apartmentType) => {
    if (apartmentType === "2") {
      return 900;
    } else {
      return 1500;
    }
  };

  calcFixedAptCost = (fixedAptConsumption, corpRatio, borewellRatio) => {
    let amountPerShare, totalShare, corpCost, borewellCost;
    totalShare = Number(corpRatio) + Number(borewellRatio);
    amountPerShare = fixedAptConsumption / totalShare;
    corpCost = amountPerShare * corpRatio * 1;
    borewellCost = amountPerShare * borewellRatio * 1.5;
    return corpCost + borewellCost;
  };
  calcGuestAptCost = (guestConsuption) => {
    let guestAmount;
    if (guestConsuption >= 3001) {
      guestAmount =
        (guestConsuption - 3000) * 8 +
        (3000 - 1500) * 5 +
        (1500 - 500) * 3 +
        500 * 2;
    } else if (guestConsuption >= 1501 && guestConsuption <= 3000) {
      guestAmount = (guestConsuption - 1500) * 5 + (1500 - 500) * 3 + 500 * 2;
    } else if (guestConsuption >= 501 && guestConsuption <= 1500) {
      guestAmount = (guestConsuption - 500) * 3 + 500 * 2;
    } else {
      guestAmount = guestConsuption * 2;
    }
    return guestAmount;
  };

  handleSubmit = (event) => {
    this.onUpdate = false;
    event.preventDefault();
    this.setState({ totalWaterConsumed: "", totalCost: "" });

    const { apartmentType, noOfguests, corpRatio, borewellRatio } = this.state;
    let totalWaterConsumed,
      totalCost,
      fixedAptConsumption,
      guestConsuption,
      fixedAptCost,
      guestAptCost;

    guestConsuption = this.calcGuestConsuption(noOfguests);
    fixedAptConsumption = this.calcFixedAptConsumption(apartmentType);
    totalWaterConsumed = fixedAptConsumption + guestConsuption;
    fixedAptCost = this.calcFixedAptCost(
      fixedAptConsumption,
      corpRatio,
      borewellRatio
    );
    guestAptCost = this.calcGuestAptCost(guestConsuption);
    totalCost = Math.round(fixedAptCost + guestAptCost);

    this.setState(() => {
      return { totalWaterConsumed: totalWaterConsumed, totalCost: totalCost };
    });
  };
  render() {
    const { totalCost, totalWaterConsumed } = this.state;
    const { handleSubmit } = this;
    return (
      <div className="App">
        <h2 className="heading2">Calculate Water Bill</h2>
        <Form
          setStateOfForm={this.setStateOfForm}
          formData={this.state}
          submit={handleSubmit}
        />
        {!this.onUpdate && totalCost && (
          <div>
            <p>
              The building consumed {totalWaterConsumed} liters of water in
              total.
            </p>
            <p>The water bill of the building is {totalCost}$.</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
