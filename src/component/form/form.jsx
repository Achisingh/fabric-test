import { Component } from "react";
import "./form.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange.bind(this);
  }
  handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.props.setStateOfForm(id, value);
  };
  render() {
    const { formData, submit } = this.props;
    const { handleChange } = this;
    const { apartmentType, noOfguests, corpRatio, borewellRatio } = formData;
    return (
      <form className="form-bill" onSubmit={submit}>
        <div className="row">
          <label className="label" htmlFor="apartmentType">
            Apartment Type
          </label>
          <select
            id="apartmentType"
            value={apartmentType}
            onChange={handleChange}
          >
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="row">
          <label className="label" htmlFor="noOfguests">
            No. of Guests
          </label>
          <input
            id="noOfguests"
            type="number"
            value={noOfguests}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <label className="label" htmlFor="corpRatio">
            Corporation Ratio
          </label>
          <input
            id="corpRatio"
            type="number"
            value={corpRatio}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <label className="label" htmlFor="borewellRatio">
            Borewell Ratio
          </label>
          <input
            id="borewellRatio"
            type="number"
            value={borewellRatio}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
