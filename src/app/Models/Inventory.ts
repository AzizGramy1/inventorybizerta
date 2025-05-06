export interface Inventory {
    id: number;
    productName: string;
    productCategory: string;
    quantity: number;
    confidence: number;
    imagePath: string;
    location: string;
    detectionDate: string; // LocalDateTime est converti en chaîne ISO
    source: string;
    destination: string;
  }