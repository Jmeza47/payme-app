/**
 * @generated SignedSource<<d356d862be90ed093a084ec01b0150d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type data2Query$variables = Record<PropertyKey, never>;
export type data2Query$data = {
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
export type data2Query = {
  response: data2Query$data;
  variables: data2Query$variables;
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
    "name": "data2Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "data2Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "601079f9d09d208a2f63b816046aad42",
    "id": null,
    "metadata": {},
    "name": "data2Query",
    "operationKind": "query",
    "text": "query data2Query {\n  loansConnection {\n    edges {\n      node {\n        _id\n        customerId\n        loanStatus\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3d1bf5861cf30a536946625b839b53ca";

export default node;
