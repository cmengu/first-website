/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import RichTextParser from "../../utils/RichTextParser";

export default function CallToAction ({content, buttons}) {
    return (
        <div>
            <div className="py-8 px-8">
                <RichTextParser content={content} />
                        <ul>
                            {buttons.map((button, i) => (
                            <li key={i}>
                                {button.type === 'page' && (
                                <Link
                                    href="[...slug]"
                                    as={`/${button.page.slug}`}
                                >
                                    {button.label}
                                </Link>
                                )}
                                {button.type === 'custom' && (
                                <a
                                    href={button.url}
                                    target={button.newTab ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                >
                                    {button.label}
                                </a>
                                )} 
                            </li>
                            ))}
                        </ul> 
            </div>
        </div>
    )
}

//          {buttons && (
//            <ul className={classes.buttons}>
//              {buttons.map((button, i) => (
//                <li key={i}>
//                  {button.type === 'page' && (
//                    <Link
//                      href="[...slug]"
//                      as={`/${button.page.slug}`}
//                      className={classes.button}
//                    >
//                      {button.label}
//                   </Link>
//                  )}
//                  {button.type === 'custom' && (
//                    <a
//                      className={classes.button}
//                      href={button.url}
//                      target={button.newTab ? '_blank' : undefined}
//                      rel="noopener noreferrer"
//                    >
//                      {button.label}
//                    </a>
//                  )}
//                </li>
//              ))}
//            </ul>
//          )}
//         </div>
//       </div>
//     );
// };