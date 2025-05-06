import { Component, OnInit } from '@angular/core';
import { EntryVoucher } from '../Models/EntryVoucher';
import { EntryVoucherService } from '../Services/EntryVoucher/entry-voucher.service';

@Component({
  selector: 'app-entry-vouchers-index',
  templateUrl: './entry-vouchers-index.component.html',
  styleUrls: ['./entry-vouchers-index.component.css']
})
export class EntryVouchersIndexComponent implements OnInit {

  vouchers: EntryVoucher[] = [];

  newVoucher: EntryVoucher = {
    
    voucherCode: '',
    announce: '',
    issueDate: '',
    expiryDate: '',
    status: ''
  };

  constructor(private voucherService: EntryVoucherService) {}

  ngOnInit(): void {
    this.loadAllVouchers();
  }

  loadAllVouchers(): void {
    this.voucherService.getAllVouchers().subscribe({
      next: (data) => this.vouchers = data,
      error: (err) => console.error('Erreur chargement des vouchers:', err)
    });
  }


  // Ajoutez cette méthode
  getStatusClass(status: string): string {
    switch(status) {
      case 'ACTIVE': return 'ACTIVE';
      case 'INACTIVE': return 'INACTIVE';
      case 'EXPIRED': return 'EXPIRED';
      case 'USED': return 'USED';
      default: return '';
    }
  }

  addVoucher(): void {
    this.voucherService.createVoucher(this.newVoucher).subscribe({
      next: (data) => {
        this.vouchers = [...this.vouchers, data];
        this.resetForm();
      },
      error: (err) => console.error('Erreur ajout voucher:', err)
    });
  }

  deleteVoucher(id: number): void {
    this.voucherService.deleteVoucher(id).subscribe({
      next: () => {
        this.vouchers = this.vouchers.filter(v => v.id !== id);
      },
      error: (err) => console.error('Erreur suppression:', err)
    });
  }

  resetForm(): void {
    this.newVoucher = {
      voucherCode: '',
      announce: '',
      issueDate: '',
      expiryDate: '',
      status: ''
    };
  }

selectedVoucher: EntryVoucher | null = null;

selectVoucher(voucher: EntryVoucher): void {
  this.selectedVoucher = voucher;
}

}




  