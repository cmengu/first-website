//In summary, the CloseModalOnRouteChange component ensures that all modals are closed whenever there is a change in the route (URL path). This can be useful to prevent modals from persisting across different pages or views and provides a cleaner user experience.
// import { useEffect } from 'react';
// import { useModal } from '@faceless-ui/react';
// import { useRouter } from 'next/router';

// export const CloseModalOnRouteChange = () => {
//   const { closeAllModals } = useModal();
//   const { asPath } = useRouter();

//   useEffect(() => {
//     closeAllModals();
//   }, [asPath]);

//   return null;
// };
