export const formData ={ 
  version: "2022.01.28", 
  data: [
  {
    component: "section",
    label: "1",
    _uid: "3a30803f-135f-442-ab6e-d44d7d7a5164",
    
    component: "fields",
    label: "1",
    _uid: "eb169f76-4cd9-4513-b673-75c7d27e02",
    
    fields: [
      
      {
        component: "text",
        label: "PHONE",
        type: "text",
        _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
      },
      {
        component: "text",
        label: "ADDRESS",
        type: "text",
        _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
      },
      {
        component: "options",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER - *mandatory for U.S. clearance",
        type: "radio",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        options: [
          {
            component: "option",
            label: "None U.S. cleanrance",
            value: "one"
          },
          {
            component: "option",
            label: "U.S. cleanrance",
            value: "two"
          }
        ]
      },
      {
        component: "text",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER",
        type: "text",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475daa66b",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
      },
      {
        component: "text",
        label: "4b. DUNS Number & Email Address **required for Food Imports Into the USA**",
        type: "text",
        _uid: "bd90f44a-d479-49ae-d66-c2c475daa66b",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
      }
    ]
  },
  {
    component: "section",
    label: "2",
    _uid: "0c946643-5a83-4545-baea-055b27b51e8a",

    fields: [
      {
        component: "field_group",
        label: "Shipper",
        _uid: "eb169f76-4cd9-4513-b673-87c5c7d27e02",
        fields: [
          {
            component: "text",
            label: "NAME",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
          },
          {
            component: "text",
            label: "CONTACT",
            type: "text",
            _uid: "6eff3638-80a7-4427-b07b-4c1be1c6b186"
          },
          {
            component: "text",
            label: "PHONE",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b93"
          },
          {
            component: "text",
            label: "ADDRESS",
            type: "text",
            _uid: "6eff3638-80a7-4427-b07b-4c1be1c6b181"
          }
        ]
      },
    ]
  },
  {
    component: "section",
    label: "3",
    _uid: "0c946643-5a83-4545-baea-055b27b5e8a",

    fields: [
      {
        component: "field_group",
        label: "EXPORTER - IF OTHER THAN SHIPPER",
        _uid: "eb169f76-4cd9-4513-b673-7c5c7d27e02",
        fields: [
          {
            component: "text",
            label: "NAME",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
          },
          {
            component: "text",
            label: "CONTACT",
            type: "text",
            _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
          },
          {
            component: "text",
            label: "PHONE",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-20dfc0b6b93"
          },
          {
            component: "text",
            label: "ADDRESS",
            type: "text",
            _uid: "6eff363880a7-4427-b07b-4c1be1c6b181"
          }
        ]
      },
    ]
  },
  {
    component: "section",
    label: "4",
    _uid: "2c946643-5a83-4545-baea-055b27b5e8a",

    fields: [
      {
        component: "field_group",
        label: "OTHER REF. NOS.",
        _uid: "eb169f76-4cd9-4513-b673-7c5c7d27e02",
        fields: [
          {
            component: "text",
            label: "NAME",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
          }
        ]
      },
    ]
  },
  {
    component: "section",
    label: "5",
    _uid: "2c946643-5a83-4545-baea-05b27b5e8a",
    fields: [
      {
        component: "field_group",
        label: "CONSIGNEE / SHIP TO PARTY NAME REF. NOS.",
        _uid: "eb169f76-4cd9-4513-b673-75c7d27e02",
        fields: [   
          {
            component: "text",
            label: "PHONE",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
          },
          {
            component: "text",
            label: "ADDRESS",
            type: "text",
            _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
          },
        ],
   
      } 
    ]
  },
  {
    component: "section",
    label: "6",
    _uid: "3a30803f-135f-442-ab6e-d44d7d7a5164",
    
    component: "fields",
    label: "4",
    _uid: "eb169f76-4cd9-4513-b673-75c7d27e02",
    
    fields: [
      
      {
        component: "text",
        label: "PHONE",
        type: "text",
        _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
      },
      {
        component: "text",
        label: "ADDRESS",
        type: "text",
        _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
      },
      {
        component: "options",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER - *mandatory for U.S. clearance",
        type: "radio",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        options: [
          {
            component: "option",
            label: "None U.S. cleanrance",
            value: "one"
          },
          {
            component: "option",
            label: "U.S. cleanrance",
            value: "two"
          }
        ]
      },
      {
        component: "text",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER",
        type: "text",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475daa66b",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
      },
      {
        component: "text",
        label: "4b. DUNS Number & Email Address **required for Food Imports Into the USA**",
        type: "text",
        _uid: "bd90f44a-d479-49ae-d66-c2c475daa66b",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
      }
    ]
  },
  {
    component: "section",
    label: "7",
    _uid: "3a30803f-135f-442-ab6e-d44d7d7a5164",
    fields: [
      {
        component: "text",
        label: "PHONE",
        type: "text",
        _uid: "5b9b79d2-32f2-42a1-b89f-203df0b6b98"
      },
      {
        component: "text",
        label: "ADDRESS",
        type: "text",
        _uid: "6eff3638-80a7-427-b07b-4c1be1c6b186"
      },
      {
        component: "options",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER - *mandatory for U.S. clearance",
        type: "radio",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        options: [
          {
            component: "option",
            label: "None U.S. cleanrance",
            value: "one"
          },
          {
            component: "option",
            label: "U.S. cleanrance",
            value: "two"
          }
        ]
      },
      {
        component: "text",
        label: "IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER",
        type: "text",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475daa66b",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
      }
    ]
  }
]
}
