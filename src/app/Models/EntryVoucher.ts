export interface EntryVoucher {
    id?: number;
    voucherCode: string;
    announce: string;
    issueDate: string;     // Format ISO: 'yyyy-MM-dd'
    expiryDate: string;
    status: string;
  }