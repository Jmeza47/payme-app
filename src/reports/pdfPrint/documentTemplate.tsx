import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { moneyFormatter } from "../../utils/moneyFormatter";
import dayjs from "dayjs";
import { ICustomer, PaymentScheduleInput } from "../../common/types";
import logo from "../../assets/logo.png";

const styles = StyleSheet.create({
  body: {
    padding: 40,
    fontSize: 10,
  },
  logoContainer: {
    marginBottom: 20,
    display: "flex",
    justifyContent: "flex-end",
    color: "black",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  customerInfoSection: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  infoText: {
    fontSize: 10,
    marginBottom: 2,
  },
  loanInfoSection: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fafafa",
    borderRadius: 4,
    border: "1px solid #e8e8e8",
  },
  tableContainer: {
    border: "1px solid #e8e8e8",
    borderRadius: 4,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 8,
  },
  tableColHeader: {
    width: "20%",
    textAlign: "center",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    padding: 8,
  },
  tableCol: {
    width: "20%",
    textAlign: "center",
  },
  oddRow: {
    backgroundColor: "#fafafa",
  },
  evenRow: {
    backgroundColor: "#ffffff",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 10,
    color: "#666",
  },
});

export function DocumentTemplate({
  customer,
  loanDate,
  loanAmount,
  loanInterest,
  loanTerm,
  loanStatus,
  paymentSchedule,
}: {
  customer: ICustomer;
  loanDate: string;
  loanAmount: number;
  loanInterest: number;
  loanTerm: number;
  loanStatus: string;
  paymentSchedule: readonly PaymentScheduleInput[];
}) {
  return (
    <Document>
      <Page style={styles.body} size="LETTER">
        {/* Logo or Company Name */}
        <View style={styles.logoContainer}>
          <Image
            src={logo}
            style={{ width: 60, alignSelf: "flex-end" }}
          ></Image>
        </View>

        {/* Customer Information */}
        <View style={styles.loanInfoSection}>
          <Text style={styles.infoTitle}>Informacion de Cliente:</Text>
          <Text style={styles.infoText}>
            Cliente: {`${customer.name} ${customer.lastName}`}
          </Text>
          <Text style={styles.infoText}>Telefono #1: {customer.phone1}</Text>
          <Text style={styles.infoText}>Identidad: {customer.dni}</Text>
          <Text style={styles.infoText}>Direccion: {customer.address}</Text>
        </View>

        {/* Loan Information */}
        <View style={styles.loanInfoSection}>
          <Text style={styles.infoTitle}>Informacion de Prestamo:</Text>
          <Text style={styles.infoText}>
            Fecha del prestamo: {dayjs(loanDate).format("DD/MM/YYYY")}
          </Text>
          <Text style={styles.infoText}>
            Cantidad: {moneyFormatter(loanAmount)}
          </Text>
          <Text style={styles.infoText}>Tasa de Interes: {loanInterest}%</Text>
          <Text style={styles.infoText}>
            Plazo: {loanTerm > 1 ? `${loanTerm} Meses` : `${loanTerm} Mes`}
          </Text>
          <Text style={styles.infoText}>
            Estado: {loanStatus === "active" ? "Pendiente" : "Pagado"}
          </Text>
        </View>

        {/* Payment Schedule Table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableColHeader}>Fecha de Pago</Text>
            <Text style={styles.tableColHeader}>Cantidad</Text>
            <Text style={styles.tableColHeader}>Intereses</Text>
            <Text style={styles.tableColHeader}>Dias Vencidos</Text>
            <Text style={styles.tableColHeader}>Interes por atraso</Text>
            <Text style={styles.tableColHeader}>Estado</Text>
          </View>
          {paymentSchedule.map((payment, index) => (
            <View
              key={index}
              style={[
                styles.tableRow,
                index % 2 === 0 ? styles.evenRow : styles.oddRow,
              ]}
            >
              <Text style={styles.tableCol}>
                {dayjs(payment.paymentDate).format("dddd DD/MM/YYYY")}
              </Text>
              <Text style={styles.tableCol}>
                {moneyFormatter(payment.amountPaid)}
              </Text>
              <Text style={styles.tableCol}>
                {moneyFormatter(payment.interestPaid)}
              </Text>
              <Text style={styles.tableCol}>{payment.dueDays}</Text>
              <Text style={styles.tableCol}>
                {moneyFormatter(payment.extraInterest)}
              </Text>
              <Text style={styles.tableCol}>
                {payment.status === "ACTIVE" ? "Pendiente" : "Pagado"}
              </Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>LD Inversiones</Text>
        </View>
      </Page>
    </Document>
  );
}
