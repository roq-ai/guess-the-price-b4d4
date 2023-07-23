import { GuessInterface } from 'interfaces/guess';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  image: string;
  price: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  guess?: GuessInterface[];
  organization?: OrganizationInterface;
  _count?: {
    guess?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  image?: string;
  organization_id?: string;
}
