import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../Services/inventory.service';// Ajustez le chemin si nécessaire
import { Inventory } from '../Models/Inventory';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryList: Inventory[] = [];
  isLoading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;


  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.inventoryService.getInventory().subscribe({
      next: (data) => {
        this.inventoryList = data;
        console.log('Inventaire chargé :', data);
      },
      error: (err) => {
        console.error('Erreur lors du chargement de l\'inventaire', err);
      }
    });
  }


  ngAfterViewInit() {
    setTimeout(() => {
      const confidenceCells = document.querySelectorAll('.container td:nth-child(4)');
      confidenceCells.forEach(cell => {
        const confidence = parseFloat(cell.textContent || '0');
        (cell as HTMLElement).style.setProperty('--confidence', confidence.toString());
      });
    }, 100);
  }


  updateInventory(item: Inventory): void {
    // Validation améliorée
    if (!item.id || item.quantity === undefined || item.confidence === undefined) {
      this.errorMessage = 'Please check: Product ID, Quantity and Confidence are required';
      setTimeout(() => this.errorMessage = null, 3000);
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    
    this.inventoryService.updateInventory(item).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = 'Inventory updated successfully';
        setTimeout(() => this.successMessage = null, 3000);
        this.loadInventory();
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Failed to update inventory';
        setTimeout(() => this.errorMessage = null, 3000);
        console.error('Update error:', err);
      }
    });
  }


  
}