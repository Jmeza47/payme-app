/**
 * @generated SignedSource<<0c9462175e33087a915c823e6ad785be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type paymentStatus = "ACTIVE" | "PAID" | "%future added value";
export type useUpdatePaymentStatusMutation$variables = {
  loanId: string;
  paymentScheduleId: string;
  status: string;
};
export type useUpdatePaymentStatusMutation$data = {
  readonly updatePaymentStatus: {
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
export type useUpdatePaymentStatusMutation = {
  response: useUpdatePaymentStatusMutation$data;
  variables: useUpdatePaymentStatusMutation$variables;
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
    "name": "paymentScheduleId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
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
        "name": "paymentScheduleId",
        "variableName": "paymentScheduleId"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "Loan",
    "kind": "LinkedField",
    "name": "updatePaymentStatus",
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
    "name": "useUpdatePaymentStatusMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdatePaymentStatusMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c7577093eaddba30bbd2d371e31d66b6",
    "id": null,
    "metadata": {},
    "name": "useUpdatePaymentStatusMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdatePaymentStatusMutation(\n  $loanId: ID!\n  $paymentScheduleId: ID!\n  $status: String!\n) {\n  updatePaymentStatus(loanId: $loanId, paymentScheduleId: $paymentScheduleId, status: $status) {\n    _id\n    customerId\n    loanAmount\n    loanInterest\n    loanTerm\n    loanStatus\n    loanDate\n    paymentSchedule {\n      _id\n      paymentDate\n      amountPaid\n      interestPaid\n      dueDays\n      extraInterest\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "873599476730ae309affe68945ccd688";

export default node;
