/**
 * @generated SignedSource<<eae250a38af7ec67d9231e7818fefbcb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type paymentStatus = "ACTIVE" | "PAID" | "%future added value";
export type useUpdateLoanStatusMutation$variables = {
  loanId: string;
  loanStatus: string;
};
export type useUpdateLoanStatusMutation$data = {
  readonly updateLoanStatus: {
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
export type useUpdateLoanStatusMutation = {
  response: useUpdateLoanStatusMutation$data;
  variables: useUpdateLoanStatusMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "loanId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "loanStatus"
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
        "name": "loanId",
        "variableName": "loanId"
      },
      {
        "kind": "Variable",
        "name": "loanStatus",
        "variableName": "loanStatus"
      }
    ],
    "concreteType": "Loan",
    "kind": "LinkedField",
    "name": "updateLoanStatus",
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
    "name": "useUpdateLoanStatusMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdateLoanStatusMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "9f0786b651d706888c747ec9ea204b61",
    "id": null,
    "metadata": {},
    "name": "useUpdateLoanStatusMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateLoanStatusMutation(\n  $loanId: ID!\n  $loanStatus: String!\n) {\n  updateLoanStatus(loanId: $loanId, loanStatus: $loanStatus) {\n    _id\n    customerId\n    loanAmount\n    loanInterest\n    loanTerm\n    loanStatus\n    loanDate\n    paymentSchedule {\n      _id\n      paymentDate\n      amountPaid\n      interestPaid\n      dueDays\n      extraInterest\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d63a17ddb44cb8a3d511d5b249d8515e";

export default node;
