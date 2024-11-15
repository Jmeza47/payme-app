/**
 * @generated SignedSource<<53410df3f33bf4cecb1e6e7db049877e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useDeleteCustomerMutation$variables = {
  id: string;
};
export type useDeleteCustomerMutation$data = {
  readonly deleteCustomer: {
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
};
export type useDeleteCustomerMutation = {
  response: useDeleteCustomerMutation$data;
  variables: useDeleteCustomerMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "id"
      }
    ],
    "concreteType": "Customer",
    "kind": "LinkedField",
    "name": "deleteCustomer",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useDeleteCustomerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDeleteCustomerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8e33bb755fbab8591b1ecded1aefccd3",
    "id": null,
    "metadata": {},
    "name": "useDeleteCustomerMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteCustomerMutation(\n  $id: ID!\n) {\n  deleteCustomer(_id: $id) {\n    _id\n    name\n    lastName\n    phone1\n    phone2\n    address\n    ref1\n    ref1Tel\n    ref2\n    ref2Tel\n  }\n}\n"
  }
};
})();

(node as any).hash = "fac1c7d84f095d20d710a1d87ea25e6d";

export default node;
