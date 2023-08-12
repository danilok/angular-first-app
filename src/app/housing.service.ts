import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const result = await data.json() ?? [];
    return result.map((housingLocation: HousingLocation) => ({
      ...housingLocation,
      photo: `${this.baseUrl}/${housingLocation.photo}`,
    }));
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const result = await data.json() ?? {};
    return ({
      ...result,
      photo: `${this.baseUrl}/${result.photo}`,
    });
  }

  submitApplication(firstName: string, lastname: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastname}, email: ${email}`);
  }
}
