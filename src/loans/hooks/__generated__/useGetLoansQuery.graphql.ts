/**
 * @generated SignedSource<<62ec05bde67ee6c3df6a4b3ef9df4d95>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type paymentStatus = "ACTIVE" | "PAID" | "%future added value";
export type useGetLoansQuery$variables = Record<PropertyKey, never>;
export type useGetLoansQuery$data = {
  readonly loansConnection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
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
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type useGetLoansQuery = {
  response: useGetLoansQuery$data;
  variables: useGetLoansQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "LoanEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Loan",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
              (v0/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useGetLoansQuery",
    "selections": [
      {
        "alias": "loansConnection",
        "args": null,
        "concreteType": "LoanConnection",
        "kind": "LinkedField",
        "name": "__main_loansConnection_connection",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useGetLoansQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "LoanConnection",
        "kind": "LinkedField",
        "name": "loansConnection",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": "loansConnection(first:100)"
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "main_loansConnection",
        "kind": "LinkedHandle",
        "name": "loansConnection"
      }
    ]
  },
  "params": {
    "cacheID": "c56e2717c41d12a2a12b93aad2421129",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "loansConnection"
          ]
        }
      ]
    },
    "name": "useGetLoansQuery",
    "operationKind": "query",
    "text": "query useGetLoansQuery {\n  loansConnection(first: 100) {\n    edges {\n      node {\n        _id\n        customerId\n        loanAmount\n        loanInterest\n        loanTerm\n        loanStatus\n        loanDate\n        paymentSchedule {\n          _id\n          paymentDate\n          amountPaid\n          interestPaid\n          dueDays\n          extraInterest\n          status\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b903070ffe20872f89c2abb44210f7b0";

export default node;
