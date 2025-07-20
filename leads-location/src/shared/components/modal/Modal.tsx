

import React, { useEffect } from 'react'

type Props = {backgroundClasses:string, show: boolean, children?: React.ReactNode}

function Modal({backgroundClasses, show, children}: Props) {

  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [show]);

  return (
    <div>
        {
            show 
            && 
            (
                <div className={`fixed inset-0 flex items-center justify-center overflow-y-auto ${backgroundClasses}`}>
                    {children}
                </div>
            )
        }
    </div>
  )
}

export default Modal