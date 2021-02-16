export interface SubjectModelServer {
    id: number;
    titel: string;
    category: string;
    description: string;
  }
  
  
  export interface serverResponse  {
    count: number;
    products: SubjectModelServer[];
  }
  