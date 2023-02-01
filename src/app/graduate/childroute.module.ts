
export const childRoutes = [
  {
    path: 'feedback',
    loadChildren: () =>
      import('./feedback/feedback-routing.module')
      .then(m => m.FeedbackRoutingModule),
    data: { icon: 'dashboard', text: 'Feedback' }
  },
  {
    path : 'tranningCiriculum',
    loadChildren: () =>
      import('./trainningcurriculum/trainningcurriculum.module')
      .then(m => m.TrainningcurriculumModule),
    data: { icon: 'dashboard', text: 'Training Curriculum' }

  },


]
