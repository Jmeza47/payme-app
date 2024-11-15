/**
 * @generated SignedSource<<72ddd4312e81138a0b915dcc6b14958d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type dataLoansQuery$variables = Record<PropertyKey, never>;
export type dataLoansQuery$data = {
  readonly loansConnection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly _id: string;
        readonly customerId: string;
        readonly loanStatus: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type dataLoansQuery = {
  response: dataLoansQuery$data;
  variables: dataLoansQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "LoanConnection",
    "kind": "LinkedField",
    "name": "loansConnection",
    "plural": false,
    "selections": [
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "_id",
                "storageKey": null
              },
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
                "name": "loanStatus",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dataLoansQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "dataLoansQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "96af4ffc09de728604d65be026ce6ea6",
    "id": null,
    "metadata": {},
    "name": "dataLoansQuery",
    "operationKind": "query",
    "text": "query dataLoansQuery {\n  loansConnection {\n    edges {\n      node {\n        _id\n        customerId\n        loanStatus\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c97e9a18c55ae8d7cd12f07d4028611c";

export default node;
