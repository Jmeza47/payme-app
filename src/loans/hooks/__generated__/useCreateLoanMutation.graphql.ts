/**
 * @generated SignedSource<<056c29fee21ef20e1173913133b17bb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type paymentStatus = "ACTIVE" | "PAID" | "%future added value";
export type loanDataInput = {
  customerId: string;
  loanAmount: number;
  loanDate: string;
  loanInterest: number;
  loanStatus: string;
  loanTerm: number;
  paymentSchedule: ReadonlyArray<PaymentScheduleInput | null | undefined>;
};
export type PaymentScheduleInput = {
  _id?: string | null | undefined;
  amountPaid: number;
  dueDays?: number | null | undefined;
  extraInterest?: number | null | undefined;
  interestPaid: number;
  paymentDate: string;
  status?: paymentStatus | null | undefined;
};
export type useCreateLoanMutation$variables = {
  loanData: loanDataInput;
};
export type useCreateLoanMutation$data = {
  readonly createLoan: {
    readonly _id: string;
    readonly customerId: string;
    readonly loanAmount: number;
    readonly loanDate: string;
    readonly loanInterest: number;
    readonly loanStatus: string;
    readonly loanTerm: number;
    readonly paymentSchedule: ReadonlyArray<{
      readonly _id: string | null | undefined;
      readonly amountPaid: number;
      readonly dueDays: number | null | undefined;
      readonly extraInterest: number | null | undefined;
      readonly interestPaid: number;
      readonly paymentDate: string;
      readonly status: paymentStatus | null | undefined;
    } | null | undefined>;
  } | null | undefined;
};
export type useCreateLoanMutation = {
  response: useCreateLoanMutation$data;
  variables: useCreateLoanMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "loanData"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "loanData"
      }
    ],
    "concreteType": "Loan",
    "kind": "LinkedField",
    "name": "createLoan",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "customerId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "loanAmount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "loanInterest",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "loanTerm",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "loanStatus",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "loanDate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PaymentSchedule",
        "kind": "LinkedField",
        "name": "paymentSchedule",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paymentDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "amountPaid",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "interestPaid",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dueDays",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "extraInterest",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateLoanMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateLoanMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "9cd4aaa3dd88f9ffde3da5a9ab60b988",
    "id": null,
    "metadata": {},
    "name": "useCreateLoanMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateLoanMutation(\n  $loanData: loanDataInput!\n) {\n  createLoan(input: $loanData) {\n    _id\n    customerId\n    loanAmount\n    loanInterest\n    loanTerm\n    loanStatus\n    loanDate\n    paymentSchedule {\n      _id\n      paymentDate\n      amountPaid\n      interestPaid\n      dueDays\n      extraInterest\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8bfdd7ac12e7b5051649fa4251a0dedf";

export default node;
