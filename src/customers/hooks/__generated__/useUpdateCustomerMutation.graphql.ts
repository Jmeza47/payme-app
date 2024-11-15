/**
 * @generated SignedSource<<443ff11f97843564a057210bfbf2776e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type customerDataInput = {
  address: string;
  lastName: string;
  name: string;
  phone1: string;
  phone2?: string | null | undefined;
  ref1: string;
  ref1Tel: string;
  ref2?: string | null | undefined;
  ref2Tel?: string | null | undefined;
};
export type useUpdateCustomerMutation$variables = {
  _id: string;
  customerData: customerDataInput;
};
export type useUpdateCustomerMutation$data = {
  readonly updateCustomer: {
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
export type useUpdateCustomerMutation = {
  response: useUpdateCustomerMutation$data;
  variables: useUpdateCustomerMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "customerData"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "customerData"
      }
    ],
    "concreteType": "Customer",
    "kind": "LinkedField",
    "name": "updateCustomer",
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
    "name": "useUpdateCustomerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdateCustomerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bb3854e985db88778857c8168e094799",
    "id": null,
    "metadata": {},
    "name": "useUpdateCustomerMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateCustomerMutation(\n  $_id: ID!\n  $customerData: customerDataInput!\n) {\n  updateCustomer(_id: $_id, input: $customerData) {\n    _id\n    name\n    lastName\n    phone1\n    phone2\n    address\n    ref1\n    ref1Tel\n    ref2\n    ref2Tel\n  }\n}\n"
  }
};
})();

(node as any).hash = "700c11130abb1af7fa453866f0da0cac";

export default node;
