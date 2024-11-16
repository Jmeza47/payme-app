import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

export enum PaymentStatus {
  ACTIVE = "ACTIVE",
  PAID = "PAID"
}



type EagerCustomerModel = {
  readonly _id: string;
  readonly address: string;
  readonly lastName: string;
  readonly name: string;
  readonly phone1: string;
  readonly phone2?: string | null;
  readonly ref1: string;
  readonly ref1Tel: string;
  readonly ref2?: string | null;
  readonly ref2Tel?: string | null;
}

type LazyCustomerModel = {
  readonly _id: string;
  readonly address: string;
  readonly lastName: string;
  readonly name: string;
  readonly phone1: string;
  readonly phone2?: string | null;
  readonly ref1: string;
  readonly ref1Tel: string;
  readonly ref2?: string | null;
  readonly ref2Tel?: string | null;
}

export declare type CustomerModel = LazyLoading extends LazyLoadingDisabled ? EagerCustomerModel : LazyCustomerModel

export declare const CustomerModel: (new (init: ModelInit<CustomerModel>) => CustomerModel)

type EagerCustomerConnectionModel = {
  readonly edges?: (CustomerEdge | null)[] | null;
  readonly pageInfo: PageInfo;
}

type LazyCustomerConnectionModel = {
  readonly edges?: (CustomerEdge | null)[] | null;
  readonly pageInfo: PageInfo;
}

export declare type CustomerConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerCustomerConnectionModel : LazyCustomerConnectionModel

export declare const CustomerConnectionModel: (new (init: ModelInit<CustomerConnectionModel>) => CustomerConnectionModel)

type EagerCustomerEdgeModel = {
  readonly cursor: string;
  readonly node?: Customer | null;
}

type LazyCustomerEdgeModel = {
  readonly cursor: string;
  readonly node?: Customer | null;
}

export declare type CustomerEdgeModel = LazyLoading extends LazyLoadingDisabled ? EagerCustomerEdgeModel : LazyCustomerEdgeModel

export declare const CustomerEdgeModel: (new (init: ModelInit<CustomerEdgeModel>) => CustomerEdgeModel)

type EagerLoanModel = {
  readonly _id: string;
  readonly customerId: string;
  readonly loanAmount: number;
  readonly loanDate: string;
  readonly loanInterest: number;
  readonly loanStatus: string;
  readonly loanTerm: number;
  readonly paymentSchedule: (PaymentSchedule | null)[];
}

type LazyLoanModel = {
  readonly _id: string;
  readonly customerId: string;
  readonly loanAmount: number;
  readonly loanDate: string;
  readonly loanInterest: number;
  readonly loanStatus: string;
  readonly loanTerm: number;
  readonly paymentSchedule: (PaymentSchedule | null)[];
}

export declare type LoanModel = LazyLoading extends LazyLoadingDisabled ? EagerLoanModel : LazyLoanModel

export declare const LoanModel: (new (init: ModelInit<LoanModel>) => LoanModel)

type EagerLoanConnectionModel = {
  readonly edges?: (LoanEdge | null)[] | null;
  readonly pageInfo: PageInfo;
  readonly totalCount?: number | null;
}

type LazyLoanConnectionModel = {
  readonly edges?: (LoanEdge | null)[] | null;
  readonly pageInfo: PageInfo;
  readonly totalCount?: number | null;
}

export declare type LoanConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerLoanConnectionModel : LazyLoanConnectionModel

export declare const LoanConnectionModel: (new (init: ModelInit<LoanConnectionModel>) => LoanConnectionModel)

type EagerLoanEdgeModel = {
  readonly cursor: string;
  readonly node?: Loan | null;
}

type LazyLoanEdgeModel = {
  readonly cursor: string;
  readonly node?: Loan | null;
}

export declare type LoanEdgeModel = LazyLoading extends LazyLoadingDisabled ? EagerLoanEdgeModel : LazyLoanEdgeModel

export declare const LoanEdgeModel: (new (init: ModelInit<LoanEdgeModel>) => LoanEdgeModel)

type EagerPageInfoModel = {
  readonly endCursor?: string | null;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
  readonly startCursor?: string | null;
}

type LazyPageInfoModel = {
  readonly endCursor?: string | null;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
  readonly startCursor?: string | null;
}

export declare type PageInfoModel = LazyLoading extends LazyLoadingDisabled ? EagerPageInfoModel : LazyPageInfoModel

export declare const PageInfoModel: (new (init: ModelInit<PageInfoModel>) => PageInfoModel)

type EagerPaymentScheduleModel = {
  readonly _id?: string | null;
  readonly amountPaid: number;
  readonly dueDays?: number | null;
  readonly extraInterest?: number | null;
  readonly interestPaid: number;
  readonly paymentDate: string;
  readonly status?: PaymentStatus | keyof typeof PaymentStatus | null;
}

type LazyPaymentScheduleModel = {
  readonly _id?: string | null;
  readonly amountPaid: number;
  readonly dueDays?: number | null;
  readonly extraInterest?: number | null;
  readonly interestPaid: number;
  readonly paymentDate: string;
  readonly status?: PaymentStatus | keyof typeof PaymentStatus | null;
}

export declare type PaymentScheduleModel = LazyLoading extends LazyLoadingDisabled ? EagerPaymentScheduleModel : LazyPaymentScheduleModel

export declare const PaymentScheduleModel: (new (init: ModelInit<PaymentScheduleModel>) => PaymentScheduleModel)

const { Customer, CustomerConnection, CustomerEdge, Loan, LoanConnection, LoanEdge, PageInfo, PaymentSchedule } = initSchema(schema) as {
  Customer: PersistentModelConstructor<CustomerModel>;
  CustomerConnection: PersistentModelConstructor<CustomerConnectionModel>;
  CustomerEdge: PersistentModelConstructor<CustomerEdgeModel>;
  Loan: PersistentModelConstructor<LoanModel>;
  LoanConnection: PersistentModelConstructor<LoanConnectionModel>;
  LoanEdge: PersistentModelConstructor<LoanEdgeModel>;
  PageInfo: PersistentModelConstructor<PageInfoModel>;
  PaymentSchedule: PersistentModelConstructor<PaymentScheduleModel>;
};

export {
  
};