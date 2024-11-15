/**
 * @generated SignedSource<<a62f0da35c5d69eeea32a7c296ed11e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type dataCustomers$data = ReadonlyArray<{
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
  readonly " $fragmentType": "dataCustomers";
}>;
export type dataCustomers$key = ReadonlyArray<{
  readonly " $data"?: dataCustomers$data;
  readonly " $fragmentSpreads": FragmentRefs<"dataCustomers">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "dataCustomers",
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
  "type": "CustomerEdge",
  "abstractKey": null
};

(node as any).hash = "74e694953cbfca193f973807b8bea3db";

export default node;
