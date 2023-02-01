
export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  
  {
    path : 'batch',
    loadChildren: () =>
    import('./batch/batch.module')
    .then(m => m.BatchModule),
     data: { icon: ' list_alt', text: 'Batch' }
  },
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./graduate-details/graduate-details.module').then(m => m.GraduateDetailsModule),
    data: { icon: 'how_to_reg', text: 'Graduate Details' }
  },
  
  {
    path: 'buddy',
    loadChildren: () =>
      import('./buddy/buddy.module').then(m => m.BuddyModule),
    data: { icon: 'people_outline', text: 'Buddy' }
  },
  {
    path: 'technicalCalender',
    loadChildren: () =>
      import('./technical-clalender/technical-clalender.module')
      .then(m => m.TechnicalClalenderModule),
    data: { icon: 'calendar_today', text: 'Technical Calendar' }
  },
  
  {
    path : 'Status',
    loadChildren: () =>
    import('./status/status.module')
    .then(m => m.StatusModule),
     data: { icon: 'check_circle', text: 'Status' }
  },

  {
    path : 'trannierAssign',
    loadChildren: () =>
    import('./trannier-assignr/trannier-assignr.module')
    .then(m => m.TrannierAssignrModule),
     data: { icon: 'assignment_ind', text: 'Trainer Assign' }
  },
  {
    path : 'Add project',
    loadChildren: () =>
    import('./add-project/add-project.module')
    .then(m => m.AddProjectModule),
     data: { icon: 'note_add', text: 'Add Project' }
  },
  {
    path : 'projectCalendar',
    loadChildren: () =>
    import('./project-calendar/project-calendar.module')
    .then(m => m.ProjectCalendarModule),
     data: { icon: 'calendar_view_day', text: 'Project Calendar' }
  },
  {
    path : 'projectAssignment',
    loadChildren: () =>
    import('./project-assignment/project-assignment.module')
    .then(m => m.ProjectAssignmentModule),
     data: { icon: 'assignment', text: 'Project Assignment' }
  },
  
  {
    path: 'mockInterview',
    loadChildren: () =>
      import('./mock-interview/mock-interview.module').then(m => m.MockInterviewModule),
    data: { icon: 'poll', text: 'Mock Interview' }
  },
  {
    path: 'mentors',
    loadChildren: () =>
      import('./mentors/mentors.module').then(m => m.MentorsModule),
    data: { icon: 'supervised_user_circle', text: 'Mentors' }
  },
  {
    path: 'feedback-received',
    loadChildren: () =>
      import('./feeback-received/feeback-received.module').then(m => m.FeebackReceivedModule),
    data: { icon: 'feedback', text: 'Feedback' }
  }
]
