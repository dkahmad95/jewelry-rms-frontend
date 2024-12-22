export interface CreateCustomerInvoice {
  name: string;
  phoneNumber: string;
  items: InvoiceItem[];
}

export interface CustomerInvoice {
  id: number;
  name: string;
  phoneNumber: string;
  invoiceDate: string;
  items: InvoiceItem[];
  totalAmount?: number;
  createdDate: string;
}

export interface UpdatedCustomerInvoice {
  name?: string;
  phoneNumber?: string;
  invoiceDate?: string;
  items?: InvoiceItem[];
  totalAmount?: number;
}

export interface InvoiceItem {
  item: string;
  description: string;
  weight: number;
  unitPrice: number;
}
