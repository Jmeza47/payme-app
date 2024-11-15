import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

export enum PaymentStatus {
  ACTIVE = "ACTIVE",
  PAID = "PAID"
}



type EagerCustomerModel = {
  readonly _id: string;
  readonly name: string;
  readonly lastName: string;
  readonly phone1: string;
  readonly phone2?: string | null;
  readonly address: string;
  readonly ref1: string;
  readonly ref1Tel: string;
  readonly ref2?: string | null;
  readonly ref2Tel?: string | null;
}

type LazyCustomerModel = {
  readonly _id: string;
  readonly name: string;
  readonly lastName: string;
  readonly phone1: string;
  readonly phone2?: string | null;
  readonly address: string;
  readonly ref1: string;
  readonly ref1Tel: string;
  readonly ref2?: string | null;
  readonly ref2Tel?: string | null;
}

export declare type CustomerModel = LazyLoading extends LazyLoadingDisabled ? EagerCustomerModel : LazyCustomerModel

export declare const CustomerModel: (new (init: ModelInit<CustomerModel>) => CustomerModel)

type EagerCustomerEdgeModel = {
  readonly node?: Customer | null;
  readonly cursor: string;
}

type LazyCustomerEdgeModel = {
  readonly node?: Customer | null;
  readonly cursor: string;
}

export declare type CustomerEdgeModel = LazyLoading extends LazyLoadingDisabled ? EagerCustomerEdgeModel : LazyCustomerEdgeModel

export declare const CustomerEdgeModel: (new (init: ModelInit<CustomerEdgeModel>) => CustomerEdgeModel)

type EagerPageInfoModel = {
  readonly startCursor?: string | null;
  readonly endCursor?: string | null;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
}

type LazyPageInfoModel = {
  readonly startCursor?: string | null;
  readonly endCursor?: string | null;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
}

export declare type PageInfoModel = LazyLoading extends LazyLoadingDisabled ? EagerPageInfoModel : LazyPageInfoModel

export declare const PageInfoModel: (new (init: ModelInit<PageInfoModel>) => PageInfoModel)

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

type EagerPaymentScheduleModel = {
  readonly _id?: string | null;
  readonly paymentDate: string;
  readonly amountPaid: number;
  readonly interestPaid: number;
  readonly dueDays?: number | null;
  readonly extraInterest?: number | null;
  readonly status?: PaymentStatus | keyof typeof PaymentStatus | null;
}

type LazyPaymentScheduleModel = {
  readonly _id?: string | null;
  readonly paymentDate: string;
  readonly amountPaid: number;
  readonly interestPaid: number;
  readonly dueDays?: number | null;
  readonly extraInterest?: number | null;
  readonly status?: PaymentStatus | keyof typeof PaymentStatus | null;
}

export declare type PaymentScheduleModel = LazyLoading extends LazyLoadingDisabled ? EagerPaymentScheduleModel : LazyPaymentScheduleModel

export declare const PaymentScheduleModel: (new (init: ModelInit<PaymentScheduleModel>) => PaymentScheduleModel)

type EagerLoanModel = {
  readonly _id: string;
  readonly customerId: string;
  readonly loanAmount: number;
  readonly loanInterest: number;
  readonly loanTerm: number;
  readonly loanStatus: string;
  readonly loanDate: string;
  readonly paymentSchedule: (PaymentSchedule | null)[];
}

type LazyLoanModel = {
  readonly _id: string;
  readonly customerId: string;
  readonly loanAmount: number;
  readonly loanInterest: number;
  readonly loanTerm: number;
  readonly loanStatus: string;
  readonly loanDate: string;
  readonly paymentSchedule: (PaymentSchedule | null)[];
}

export declare type LoanModel = LazyLoading extends LazyLoadingDisabled ? EagerLoanModel : LazyLoanModel

export declare const LoanModel: (new (init: ModelInit<LoanModel>) => LoanModel)

type EagerLoanEdgeModel = {
  readonly node?: Loan | null;
  readonly cursor: string;
}

type LazyLoanEdgeModel = {
  readonly node?: Loan | null;
  readonly cursor: string;
}

export declare type LoanEdgeModel = LazyLoading extends LazyLoadingDisabled ? EagerLoanEdgeModel : LazyLoanEdgeModel

export declare const LoanEdgeModel: (new (init: ModelInit<LoanEdgeModel>) => LoanEdgeModel)

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

const { Customer, CustomerEdge, PageInfo, CustomerConnection, PaymentSchedule, Loan, LoanEdge, LoanConnection } = initSchema(schema) as {
  Customer: PersistentModelConstructor<CustomerModel>;
  CustomerEdge: PersistentModelConstructor<CustomerEdgeModel>;
  PageInfo: PersistentModelConstructor<PageInfoModel>;
  CustomerConnection: PersistentModelConstructor<CustomerConnectionModel>;
  PaymentSchedule: PersistentModelConstructor<PaymentScheduleModel>;
  Loan: PersistentModelConstructor<LoanModel>;
  LoanEdge: PersistentModelConstructor<LoanEdgeModel>;
  LoanConnection: PersistentModelConstructor<LoanConnectionModel>;
};

export {
  
};