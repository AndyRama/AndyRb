import './GuestsPanel.scss'
import {
  StepperRow,
  StepperTitle,
  StepperSubTitle,
  StepperLink,
} from './StepperRow'

const GuestsPanel = () => {
  return (
    <div className="" guests-panel>
      *
      <StepperRow>
        <StepperTitle>Adultes</StepperTitle>
        <StepperSubTitle>13 ans et plus</StepperSubTitle>
      </StepperRow>
      <StepperRow>
        <StepperTitle>Enfants</StepperTitle>
        <StepperSubTitle>2 ans à 12 ans</StepperSubTitle>
      </StepperRow>
      <StepperRow>
        <StepperTitle>Bébés</StepperTitle>
        <StepperSubTitle>- de 2 ans</StepperSubTitle>
      </StepperRow>
      <StepperRow>
        <StepperTitle maxValue={5}>Animaux domestiques</StepperTitle>
        <StepperLink>
          <a href="/">Un animal d'assistance vous accompagne ?</a>{' '}
        </StepperLink>
      </StepperRow>
    </div>
  )
}

export default GuestsPanel
