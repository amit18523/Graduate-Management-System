
export const childRoutes = [
  {
    path: 'calendarView',
    loadChildren: () =>
      import('./calendar-view/calendar-view.module')
      .then(m => m.CalendarViewModule),
    data: { icon: 'calendar_view_day', text: 'Calendar View'}
  },
  {
    path: 'curriculumView',
    loadChildren: () =>
      import('./curriculum-view/curriculum-view.module')
      .then(m => m.CurriculumViewModule),
    data: { icon: 'table_chart', text: 'Curriculum View'}
  },
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./graduate-details-others/graduate-details-others.module')
      .then(m => m.GraduateDetailsOthersModule),
    data: { icon: 'how_to_reg', text: 'Graduate Details' }
  },
  {
    path : 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  }
]
