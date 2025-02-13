import React from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
function customSetIcon(props) {
    const icons = {
      1:1,
      2:2,
      3:3,
      4:4,
      5:5
    };
    
    return (
      <div
      className="iconeStyle"
      >
        {icons[String(props.icon)]}
      </div>
    );
  }
export default function CustomStepper(props) {
    function getSteps() {
        return ['שלב 1','שלב 2','שלב 3','שלב 4','שלב 5'];
      }
    let steps = getSteps();
    return (
        <Stepper style={{direction:"ltr"}} activeStep={props.stepNum} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} >
            <StepLabel StepIconComponent={customSetIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    )
}
