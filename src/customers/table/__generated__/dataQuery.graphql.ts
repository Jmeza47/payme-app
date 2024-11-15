/**
 * @generated SignedSource<<ed567c8d0771f0447657501fe0f6bdc2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type dataQuery$variables = Record<PropertyKey, never>;
export type dataQuery$data = {
  readonly customersConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly _id: string;
        readonly address: string;
        readonly lastName: string;
        readonly name: string;
        readonly phone1: string;
        readonly phone2: string | null | undefined;
        readonly ref1: string;
        readonly ref1Tel: string;
        readonly ref2: string | null | undefined;
        readonly ref2Tel: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type dataQuery = {
  response: dataQuery$data;
  variables: dataQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CustomerConnection",
    "kind": "LinkedField",
    "name": "customersConnection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CustomerEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Customer",
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
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "phone1",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "phone2",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ref1",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ref1Tel",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ref2",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ref2Tel",
                "storageKey": null
              }
            ],
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
    "name": "dataQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "dataQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b9cb814c5779e64e4932af76170d3373",
    "id": null,
    "metadata": {},
    "name": "dataQuery",
    "operationKind": "query",
    "text": "query dataQuery {\n  customersConnection {\n    edges {\n      node {\n        _id\n        name\n        lastName\n        phone1\n        phone2\n        address\n        ref1\n        ref1Tel\n        ref2\n        ref2Tel\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "66e912ee66e9332cafcb483f649b40b9";

export default node;
