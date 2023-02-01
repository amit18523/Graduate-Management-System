
export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./gaduate-details-tech-del/gaduate-details-tech-del.module').then(m => m.GaduateDetailsTechDelModule),
    data: { icon: 'how_to_reg', text: 'Graduate Details' }
  },
  {
    path: 'curriculumDesign',
    loadChildren: () =>
      import('./curriculum-design/curriculum-design.module')
        .then(m => m.CurriculumDesignModule),
    data: { icon: 'table_chart', text: 'Curriculum Design' }
  
  },
  {
    path: 'evaluateGrauate',
    loadChildren: () =>
      import('./evaluate-graduate/evaluate-graduate.module')
        .then(m => m.EvaluateGraduateModule),
    data: { icon: 'receipt', text: 'Evaluate Graduate' }
  },
  
  {
    path: 'Status',
    loadChildren: () =>
      import('../technical-manager/status/status.module').then(m => m.StatusModule),
      data: { icon: 'check_circle', text: 'Status' }
  }
 

]
