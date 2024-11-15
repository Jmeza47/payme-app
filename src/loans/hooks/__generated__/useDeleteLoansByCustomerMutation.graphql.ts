/**
 * @generated SignedSource<<69d25796a62b1da10fb4e5a4b14cccd8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type paymentStatus = "ACTIVE" | "PAID" | "%future added value";
export type useDeleteLoansByCustomerMutation$variables = {
  customerId: string;
};
export type useDeleteLoansByCustomerMutation$data = {
  readonly deleteLoansByCustomer: {
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
export type useDeleteLoansByCustomerMutation = {
  response: useDeleteLoansByCustomerMutation$data;
  variables: useDeleteLoansByCustomerMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "customerId"
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
        "name": "customerId",
        "variableName": "customerId"
      }
    ],
    "concreteType": "Loan",
    "kind": "LinkedField",
    "name": "deleteLoansByCustomer",
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
    "name": "useDeleteLoansByCustomerMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDeleteLoansByCustomerMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "3262247829c5894d833ca5c3a0636cdc",
    "id": null,
    "metadata": {},
    "name": "useDeleteLoansByCustomerMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteLoansByCustomerMutation(\n  $customerId: ID!\n) {\n  deleteLoansByCustomer(customerId: $customerId) {\n    _id\n    customerId\n    loanAmount\n    loanInterest\n    loanTerm\n    loanStatus\n    loanDate\n    paymentSchedule {\n      _id\n      paymentDate\n      amountPaid\n      interestPaid\n      dueDays\n      extraInterest\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3cc9212a341272e94463cf01a8a4e260";

export default node;
