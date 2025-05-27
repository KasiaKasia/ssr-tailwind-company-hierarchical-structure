import { EmployeeStructureInterface } from "../interfaces/employee";

export interface ProjectInterface {
  readonly name?: string,
  readonly code?: string,
  readonly id: number;
}

export const projects: ProjectInterface[] = [
  { name: 'Sklep internetowy z ubraniami', code: 'ecommerce-fashion', id: 1 },
  { name: 'Panel administracyjny dla szkoły językowej', code: 'school-admin', id: 2 },
  { name: 'Strona portfolio dla fotografa', code: 'photo-portfolio', id: 3 },
  { name: 'Aplikacja do rezerwacji wizyt lekarskich', code: 'medical-booking', id: 4 },
  { name: 'Serwis z przepisami kulinarnymi', code: 'recipe-app', id: 5 },
  { name: 'Platforma ogłoszeń lokalnych', code: 'local-ads', id: 6 },
  { name: 'Blog technologiczny z komentarzami', code: 'tech-blog', id: 7 },
  { name: 'Strona dla agencji marketingowej', code: 'marketing-agency', id: 8 },
  { name: 'Aplikacja do śledzenia nawyków', code: 'habit-tracker', id: 9 },
  { name: 'System do zarządzania projektami', code: 'project-manager', id: 10 },
  { name: 'Platforma do nauki online', code: 'online-learning', id: 11 },
  { name: 'Aplikacja do zarządzania budżetem', code: 'budget-planner', id: 12 },
  { name: 'System rekrutacyjny', code: 'recruitment-system', id: 13 },
  { name: 'Wirtualny dziennik ucznia', code: 'student-diary', id: 14 },
  { name: 'Aplikacja do zamawiania jedzenia', code: 'food-delivery', id: 15 },
  { name: 'Portal z ogłoszeniami pracy', code: 'job-board', id: 16 },
  { name: 'System CRM dla małych firm', code: 'smallbiz-crm', id: 17 },
  { name: 'Aplikacja fitness z ćwiczeniami', code: 'fitness-app', id: 18 },
  { name: 'Platforma streamingowa dla muzyków', code: 'music-stream', id: 19 },
  { name: 'System ankietowy dla firm', code: 'survey-system', id: 20 },
  { name: 'Aplikacja pogodowa z mapą', code: 'weather-map', id: 21 },
  { name: 'Katalog książek online', code: 'online-library', id: 22 },
  { name: 'Planer podróży z mapą', code: 'trip-planner', id: 23 },
  { name: 'System do zarządzania magazynem', code: 'warehouse-manager', id: 24 },
  { name: 'Aplikacja do nauki języków', code: 'language-trainer', id: 25 },
  { name: 'Platforma do organizacji wydarzeń', code: 'event-organizer', id: 26 }
];

export const employeeStructure: EmployeeStructureInterface = {
  firstName: "Lois",
  lastName: "Vega",
  id: "DD1WMuvT",
  projects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },
  { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 },
  { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 },
  ],
  subordinates: [
    {
      firstName: "Archer",
      lastName: "Stokes",
      id: "PU7UDDIh",
      projects: [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
      subordinates: [
        {
          firstName: "Katherine",
          lastName: "Rice",
          id: "1jW93sPQ",

          projects: [{ id: 1 }],
          subordinates: [
            {
              firstName: "Hayden",
              lastName: "Peay",
              id: "CNLntLeB",
              projects: [{ id: 1 }],
              subordinates: []
            }
          ]
        },
        {
          firstName: "Calvert",
          lastName: "Hunt",
          id: "7O6ph1VR",
          projects: [{ id: 3 }, { id: 4 }, { id: 5 }],
          subordinates: [
            {
              firstName: "Cecilia",
              lastName: "Barlow",
              id: "Uf79RV42",
              projects: [{ id: 3 }, { id: 4 }],
              subordinates: [
                {
                  firstName: "Chris",
                  lastName: "Tomlinson",
                  id: "d9ELva",
                  projects: [{ id: 3 }],
                  subordinates: []
                },
                {
                  firstName: "Scott",
                  lastName: "Reed",
                  id: "VrTVbj",
                  projects: [{ id: 4 }],
                  subordinates: []
                }
              ]
            },
            {
              firstName: "Forrest",
              lastName: "Higgins",
              id: "y4hj5Vx0",
              projects: [{ id: 5 }],
              subordinates: [
                {
                  firstName: "Halsey",
                  lastName: "Jarvis",
                  id: "nTIO0k",
                  projects: [{ id: 5 }],
                  subordinates: []
                }
              ]
            }
          ]
        },
        {
          firstName: "Mick",
          lastName: "Dunn",
          id: "bYvX7S0N",
          projects: [{ id: 6 }],
          subordinates: [
            {
              firstName: "Harding",
              lastName: "Kirk",
              id: "SWah7put",
              projects: [{ id: 6 }],
              subordinates: []
            }
          ]
        }
      ]
    },
    {
      firstName: "Polly",
      lastName: "Ferguson",
      id: "czo57yeu",
      projects: [{ id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }],
      subordinates: [
        {
          firstName: "Tina",
          lastName: "Houle",
          id: "T3icXqoN",
          projects: [{ id: 7 },],

          subordinates: []
        },
        {
          firstName: "Eddie",
          lastName: "Malone",
          id: "mDYILoaF",
          projects: [{ id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }],
          subordinates: [
            {
              firstName: "Winifred",
              lastName: "Brooks",
              id: "yDZiWSl3",
              projects: [{ id: 8 },],
              subordinates: [
                {
                  firstName: "Viola",
                  lastName: "Gray",
                  id: "AMKkWV",
                  projects: [{ id: 8 },],
                  subordinates: []
                }
              ]
            },
            {
              firstName: "Rhea",
              lastName: "Law",
              id: "j7jbKeam",
              projects: [{ id: 9 },],
              subordinates: []
            },
            {
              firstName: "Isaiah",
              lastName: "Noble",
              id: "PkyubTqR",
              projects: [{ id: 10 }, { id: 11 }],
              subordinates: [
                {
                  firstName: "Elbert",
                  lastName: "Wood",
                  id: "lbNnVX",
                  projects: [{ id: 10 },],
                  subordinates: [
                    {
                      firstName: "William",
                      lastName: "Fairbank",
                      id: "k9Itgc",
                      projects: [{ id: 10 }],
                      subordinates: [
                        {
                          firstName: "Bruno",
                          lastName: "George",
                          id: "STwPkq",
                          projects: [{ id: 10 }],
                          subordinates: [
                            {
                              firstName: "Maia",
                              lastName: "Swanson",
                              id: "mmGDyA",
                              projects: [{ id: 10 }],
                              subordinates: []
                            },
                            {
                              firstName: "Nydia",
                              lastName: "Newton",
                              id: "HXH920",
                              projects: [{ id: 2 }],
                              subordinates: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      firstName: "Rebecca",
                      lastName: "Beck",
                      id: "CaGDkc",
                      projects: [{ id: 11 }],

                      subordinates: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      firstName: "Larry",
      lastName: "Bond",
      id: "endkVDCm",
      projects: [{ id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 24 }, { id: 25 }, { id: 26 }],
      subordinates: [
        {
          firstName: "Miranda",
          lastName: "Rogers",
          id: "YZ71HrRZ",
          projects: [{ id: 12 }],

          subordinates: []
        },
        {
          firstName: "Alma",
          lastName: "Benson",
          id: "YX3LFEow",
          projects: [{ id: 13 }, { id: 14 }, { id: 15 }],
          subordinates: [
            {
              firstName: "Sebastian",
              lastName: "Wheeler",
              id: "u5OlBxVo",
              projects: [{ id: 14 }, { id: 15 }],
              subordinates: [
                {
                  firstName: "Barbara",
                  lastName: "Rice",
                  id: "OovF5g",
                  projects: [{ id: 14 }],
                  subordinates: []
                },
                {
                  firstName: "Mason",
                  lastName: "Moss",
                  id: "DEZuDO",
                  projects: [{ id: 15 }],
                  subordinates: []
                }
              ]
            },
            {
              firstName: "Sadie",
              lastName: "Martin",
              id: "F6unYqEq",
              projects: [{ id: 13 }],
              subordinates: []
            }
          ]
        },
        {
          firstName: "Valentine",
          lastName: "Carter",
          id: "mNULAHeT",
          projects: [{ id: 24 }, { id: 25 }, { id: 26 }],
          subordinates: [
            {
              firstName: "Veronica",
              lastName: "Francis",
              id: "yaPoPqGC",
              projects: [{ id: 24 }, { id: 25 }, { id: 26 }],
              subordinates: [
                {
                  firstName: "Gabrielle",
                  lastName: "Foster",
                  id: "Epvvym",
                  projects: [{ id: 24 }],
                  subordinates: [
                    {
                      firstName: "Benedict",
                      lastName: "Stephens",
                      id: "6zaOV3",
                      projects: [{ id: 24 }],
                      subordinates: []
                    }
                  ]
                },
                {
                  firstName: "Bridget",
                  lastName: "Freeman",
                  id: "aE3jFd",
                  projects: [{ id: 25 }],
                  subordinates: []
                },
                {
                  firstName: "Gloria",
                  lastName: "Warner",
                  id: "RnL1bs",
                  projects: [{ id: 26 }],
                  subordinates: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      firstName: "Crispin",
      lastName: "Hoyles",
      id: "rsCsUaIV",
      projects: [{ id: 16 }, { id: 17 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }],
      subordinates: [
        {
          firstName: "Rowan",
          lastName: "Holmes",
          id: "MmSuWb2S",
          projects: [{ id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }],
          subordinates: [
            {
              firstName: "Andy",
              lastName: "Fuller",
              id: "oCXkUTat",
              projects: [{ id: 18 }],
              subordinates: []
            },
            {
              firstName: "Horace",
              lastName: "Gordon",
              id: "gOhMOFWP",
              projects: [{ id: 16 }, { id: 17 }],
              subordinates: [
                {
                  firstName: "Austin",
                  lastName: "Leonard",
                  id: "9jfBtj",
                  projects: [{ id: 17 }],
                  subordinates: []
                }
              ]
            },
            {
              firstName: "Gabrielle",
              lastName: "Peay",
              id: "I6TJdbeg",
              projects: [{ id: 19 }],
              subordinates: []
            }
          ]
        },
        {
          firstName: "Ted",
          lastName: "Bates",
          id: "unXJxaAL",
          projects: [{ id: 20 }],
          subordinates: []
        },
        {
          firstName: "Winifred",
          lastName: "Brooks",
          id: "DKFNF4h4",
          projects: [{ id: 21 }],
          subordinates: []
        },
        {
          firstName: "Cheryl",
          lastName: "Vaughn",
          id: "sdgqNbzu",
          projects: [{ id: 22 }, { id: 23 }, { id: 24 }],
          subordinates: [
            {
              firstName: "Luna",
              lastName: "Goodman",
              id: "vmJhYf",
              projects: [{ id: 22 }],
              subordinates: []
            },
            {
              firstName: "Davy",
              lastName: "Booth",
              id: "Kwu6hQ",
              projects: [{ id: 23 }],
              subordinates: [
                {
                  firstName: "Emma",
                  lastName: "Armstrong",
                  id: "LlOiQ7",
                  projects: [{ id: 23 }],
                  subordinates: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
