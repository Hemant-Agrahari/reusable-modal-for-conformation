import InputField from "./component/input-field/InputField";
import "./style.page.scss";
export default function Home() {
  return (
    <div className="container">
      <div className="user-info-form">
        <h2 className="form-heading">User form</h2>
        <div className="user-info-field">
          <div className="user-info-label">FirstName:</div>
          <div className="user-info-text">
            <InputField name="firstname" className="input-box" />
          </div>
        </div>
        <div className="user-info-field">
          <div className="user-info-label">Middle Name:</div>
          <div className="user-info-text">
            <InputField name="middlename" className="input-box" />
          </div>
        </div>
        <div className="user-info-field">
          <div className="user-info-label">LastName:</div>
          <div className="user-info-text">
            <InputField name="lastname" className="input-box" />
          </div>
        </div>
        <div className="user-info-field">
          <div className="user-info-label">Adhar Number:</div>
          <div className="user-info-text">
            <InputField name="firstname" type="number" className="input-box" />
          </div>
        </div>
        <div className="user-info-field">
          <div className="user-info-label">Mobile Number:</div>
          <div className="user-info-text">
            <InputField name="firstname" type="number" className="input-box" />
          </div>
        </div>
        <div className="button">
          <button className="button-text">Submit</button>
        </div>
      </div>
    </div>
  );
}
