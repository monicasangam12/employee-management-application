import { Component } from '@angular/core';
import { Router } from '@angular/router';

export enum STATE{
    HOMEPAGE,
    REGISTER,
    LOGIN,
    DASHBOARD,
    DASHBOARD_WITH_NO_SELECTION,
    DASHBOARD_WITH_ONE_SELECTION,
    DASHBOARD_WITH_MORE_THAN_ONE_SELECTION,
    ADD,
    EDIT,
    DELETE,
    LOGOUT
}

export enum ACTION{
    GO_HOME,
    GO_REGISTER,
    SUBMIT_REGISTER,
    GO_LOGIN,
    SUBMIT_LOGIN,
    GO_DASHBOARD,
    SUBMIT_DASHBOARD,
    DASHBOARD_WITH_NO_SELECTION,
    DASHBOARD_WITH_ONE_SELECTION,
    DASHBOARD_WITH_MORE_THAN_ONE_SELECTION,
    SUBMIT_ADD,
    GO_ADD,
    GO_SEARCH,
    SUBMIT_SEARCH,
    GO_EDIT,
    SUBMIT_EDIT,
    SUBMIT_DELETE,
    SUBMIT_SORT,
    SUBMIT_FILTER,
    SUBMIT_LOGOUT
}

const currentStateMachineStep = {from: STATE.REGISTER , to: STATE.LOGIN, action: ACTION.GO_REGISTER};

export const stateMachineStages = [
    {from: currentStateMachineStep, to: STATE.HOMEPAGE, action: ACTION.GO_HOME},
    {from: currentStateMachineStep, to: STATE.LOGIN, action: ACTION.GO_LOGIN},
    {from: currentStateMachineStep, to: STATE.REGISTER, action: ACTION.GO_REGISTER},
    
    {from: STATE.DASHBOARD, to: STATE.DASHBOARD_WITH_NO_SELECTION, action: ACTION.DASHBOARD_WITH_NO_SELECTION},
    {from: STATE.DASHBOARD, to: STATE.DASHBOARD_WITH_ONE_SELECTION, action: ACTION.DASHBOARD_WITH_ONE_SELECTION},
    {from: STATE.DASHBOARD, to: STATE.DASHBOARD_WITH_MORE_THAN_ONE_SELECTION, action: ACTION.DASHBOARD_WITH_MORE_THAN_ONE_SELECTION},

    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.ADD, action: ACTION.GO_ADD},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.ADD, action: ACTION.SUBMIT_ADD},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.EDIT, action: ACTION.GO_EDIT},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.EDIT, action: ACTION.SUBMIT_EDIT},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.DELETE, action: ACTION.SUBMIT_DELETE},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.REGISTER, action: ACTION.GO_REGISTER},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.REGISTER, action: ACTION.SUBMIT_REGISTER},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.LOGIN, action: ACTION.GO_LOGIN},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.LOGIN, action: ACTION.SUBMIT_LOGIN},
    {from: STATE.DASHBOARD_WITH_NO_SELECTION, to: STATE.LOGOUT, action: ACTION.SUBMIT_LOGOUT},

    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.ADD, action: ACTION.GO_ADD},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.ADD, action: ACTION.SUBMIT_ADD},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.ADD, action: ACTION.GO_EDIT},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.ADD, action: ACTION.SUBMIT_EDIT},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.DELETE, action: ACTION.SUBMIT_DELETE},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.REGISTER, action: ACTION.GO_REGISTER},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.REGISTER, action: ACTION.SUBMIT_REGISTER},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.LOGIN, action: ACTION.GO_LOGIN},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.LOGIN, action: ACTION.SUBMIT_LOGIN},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.LOGOUT, action: ACTION.SUBMIT_LOGOUT},

    {from: STATE.DASHBOARD_WITH_MORE_THAN_ONE_SELECTION, to: STATE.ADD, action: ACTION.GO_ADD},
    {from: STATE.DASHBOARD_WITH_MORE_THAN_ONE_SELECTION, to: STATE.ADD, action: ACTION.SUBMIT_ADD},
    {from: STATE.DASHBOARD_WITH_MORE_THAN_ONE_SELECTION, to: STATE.ADD, action: ACTION.GO_EDIT},
    {from: STATE.DASHBOARD_WITH_MORE_THAN_ONE_SELECTION, to: STATE.ADD, action: ACTION.SUBMIT_EDIT},
    {from: STATE.DASHBOARD_WITH_MORE_THAN_ONE_SELECTION, to: STATE.DELETE, action: ACTION.SUBMIT_DELETE},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.REGISTER, action: ACTION.GO_REGISTER},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.REGISTER, action: ACTION.SUBMIT_REGISTER},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.LOGIN, action: ACTION.GO_LOGIN},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.LOGIN, action: ACTION.SUBMIT_LOGIN},
    {from: STATE.DASHBOARD_WITH_ONE_SELECTION, to: STATE.LOGOUT, action: ACTION.SUBMIT_LOGOUT},
]



@Component({
  selector: 'app-employee-state-transition',
  imports: [],
  templateUrl: './employee-state-transition.html',
  styleUrl: './employee-state-transition.css'
})
export class EmployeeStateTransitionComponent {
  
   
     currentStateMachineStep = currentStateMachineStep.action;
     previousStateMachineStep = currentStateMachineStep.from;
     nextStateMachineStep = currentStateMachineStep.to;

     states!: STATE;
     action!: ACTION;

  constructor(private router: Router){
 
  }

    getCurrentState(){
        console.log("Current state of the employee state machine", currentStateMachineStep);

        if(currentStateMachineStep.from == STATE.HOMEPAGE){
          console.log("Clicked on the homepage link" , this.router.navigateByUrl("homepage"));
        }

        return currentStateMachineStep;
    }

    getNextState(){
        console.log("Next state of the employee state machine", this.nextStateMachineStep);
        return this.nextStateMachineStep;
    }

    getPreviousState(){
        console.log("Previous state of the employee state machine", this.previousStateMachineStep);
        return this.previousStateMachineStep;
    }

}
