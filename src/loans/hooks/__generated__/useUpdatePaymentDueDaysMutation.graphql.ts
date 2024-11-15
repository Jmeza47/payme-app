/**
 * @generated SignedSource<<7232abcec653592b6383fbeaf5692fb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type paymentStatus = "ACTIVE" | "PAID" | "%future added value";
export type useUpdatePaymentDueDaysMutation$variables = {
  dueDays: number;
  extraInterest: number;
  loanId: string;
  paymentScheduleId: string;
};
export type useUpdatePaymentDueDaysMutation$data = {
  readonly updatePaymentDueDays: {
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
export type useUpdatePaymentDueDaysMutation = {
  response: useUpdatePaymentDueDaysMutation$data;
  variables: useUpdatePaymentDueDaysMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "dueDays"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "extraInterest"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "loanId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "paymentScheduleId"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "dueDays",
        "variableName": "dueDays"
      },
      {
        "kind": "Variable",
        "name": "extraInterest",
        "variableName": "extraInterest"
      },
      {
        "kind": "Variable",
        "name": "loanId",
        "variableName": "loanId"
      },
      {
        "kind": "Variable",
        "name": "paymentScheduleId",
        "variableName": "paymentScheduleId"
      }
    ],
    "concreteType": "Loan",
    "kind": "LinkedField",
    "name": "updatePaymentDueDays",
    "plural": false,
    "selections": [
      (v4/*: any*/),
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
          (v4/*: any*/),
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useUpdatePaymentDueDaysMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "useUpdatePaymentDueDaysMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "f19aa99b9dc38ef5ad2b737175689369",
    "id": null,
    "metadata": {},
    "name": "useUpdatePaymentDueDaysMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdatePaymentDueDaysMutation(\n  $loanId: ID!\n  $paymentScheduleId: ID!\n  $dueDays: Int!\n  $extraInterest: Float!\n) {\n  updatePaymentDueDays(loanId: $loanId, paymentScheduleId: $paymentScheduleId, dueDays: $dueDays, extraInterest: $extraInterest) {\n    _id\n    customerId\n    loanAmount\n    loanInterest\n    loanTerm\n    loanStatus\n    loanDate\n    paymentSchedule {\n      _id\n      paymentDate\n      amountPaid\n      interestPaid\n      dueDays\n      extraInterest\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "874825d7cda69b1918e1db41420785b7";

export default node;
