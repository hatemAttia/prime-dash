import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-predction',
  templateUrl: './predction.component.html',
  styleUrls: ['./predction.component.css'],
})
export class PredctionComponent implements OnInit {
  items: MenuItem[] = [];
  cities = [
    { name: 'amira', value: 50 },
    { name: 'amira', value: 50 },
    { name: 'amira', value: 50 },
    { name: 'amira', value: 50 },
    { name: 'amira', value: 50 },
    { name: 'amira', value: 50 },
  ];
  item = [
    'higher_risk',
    'vehicle_type',
    'registration_type',
    'vehicle_make',
    'vehicle_model',
    'vehicle_fuel_type',
    'vehicle_fiscal_power',
    'vehicle_body_type',
    'vehicle_is_insured',
    'purchase_mode',
    'current_value',
    'registration_card_holder_type',
    'vehicule_usage_type',
    'kilometers_driver_per_year',
    'parking_mode',
    'trailer_caravan_type',
    'usual_driver_type',
    'driver_licence_country',
    'driver_status',
    'driver_professional_category',
    'driver_is_exclusive',
    'has_second_driver',
    'insured_total_months',
    'driving_experiences',
    'rebate_surcharge_coefficient',
    'crm50_total_years',
    'canceled_by_company',
    'driver_licence_is_canceled',
    'has_damage',
    'damage_count',
    'total_months_without_claims',
    'assign_answer',
  ];

  activeIndex: number;
  product: any;
  predictionForm: FormGroup;
  constructor(private messageService: MessageService) {
    this.activeIndex = 0;
    this.predictionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      higher_risk: new FormControl('', Validators.required),
      vehicle_type: new FormControl('', Validators.required),
      registration_type: new FormControl('', Validators.required),
      vehicle_make: new FormControl('', Validators.required),
      vehicle_model: new FormControl('', Validators.required),
      vehicle_fuel_type: new FormControl('', Validators.required),
      vehicle_fiscal_power: new FormControl('', Validators.required),
      vehicle_body_type: new FormControl('', Validators.required),
      registration_card_holder_type: new FormControl('', Validators.required),
      vehicule_usage_type: new FormControl('', Validators.required),
      kilometers_driver_per_year: new FormControl('', Validators.required),
      parking_mode: new FormControl('', Validators.required),
      trailer_caravan_type: new FormControl('', Validators.required),
      usual_driver_type: new FormControl('', Validators.required),
      driver_licence_country: new FormControl('', Validators.required),
      driver_status: new FormControl('', Validators.required),
      driver_professional_category: new FormControl('', Validators.required),
      driver_is_exclusive: new FormControl('', Validators.required),
      has_second_driver: new FormControl('', Validators.required),
      insured_total_months: new FormControl('', Validators.required),
      driving_experiences: new FormControl('', Validators.required),
      rebate_surcharge_coefficient: new FormControl('', Validators.required),
      crm50_total_years: new FormControl('', Validators.required),
      canceled_by_company: new FormControl('', Validators.required),
      driver_licence_is_canceled: new FormControl('', Validators.required),
      has_damage: new FormControl('', Validators.required),
      damage_count: new FormControl('', Validators.required),
      total_months_without_claims: new FormControl('', Validators.required),
      assign_answer: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.product = {};
    this.items = [
      {
        label: 'Personal',
        command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({
            severity: 'info',
            summary: 'First Step',
            detail: event.item.label,
          });
        },
      },
      {
        label: 'Seat',
        command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({
            severity: 'info',
            summary: 'Seat Selection',
            detail: event.item.label,
          });
        },
      },
      {
        label: 'Payment',
        command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({
            severity: 'info',
            summary: 'Pay with CC',
            detail: event.item.label,
          });
        },
      },
    ];
  }
  click() {
    console.log();
  }
}
