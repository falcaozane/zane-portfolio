
import React from 'react';
import { certifications, type Certification } from '@/data/certifications';
import { IconWorldShare } from '@tabler/icons-react'

const VISIBLE_ID_LENGTH = 40;

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-10 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold text-orange-500 mb-8 sm:mb-12 relative pb-2 inline-block">
          <span className="relative inline-block pb-1">
            CERTIFICATIONS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
          </span>
        </h3>

        {/* Responsive grid: 1 / 2 columns */}
        <ul className="grid p-0.5 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
          {certifications.map((item: Certification) => {
            const href = item.letter || item.website || '';
            const hasLink = Boolean(href);

            // --- Truncate logic for Credential ID (no layout shift) ---
            const fullId = item.credentialId ?? '';
            const hasTail = fullId.length > VISIBLE_ID_LENGTH;
            const idHead = hasTail ? fullId.slice(0, VISIBLE_ID_LENGTH) : fullId;
            const idTail = hasTail ? fullId.slice(VISIBLE_ID_LENGTH) : '';

            const CardInner = (
              <div className="flex items-center gap-3 sm:gap-2">
                {/* Responsive avatar */}
                <div className="avatar shrink-0">
                  <div className="bg-white w-10 sm:w-12 lg:w-14 rounded-full overflow-hidden outline outline-offset-2 outline-base-content/40 group-hover:outline-primary-content">
                    <img
                      loading="lazy"
                      src={item.image || '/placeholder-logo.svg'}
                      alt={item.company ? `Logo: ${item.company}` : 'Issuer logo'}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Text block (min-w-0 to prevent push-out) */}
                <div className="flex-1 min-w-0 flex flex-col ml-2 sm:ml-4">
                  <h2 className="font-bold text-base sm:text-lg lg:text-xl leading-tight line-clamp-2">
                    {item.post}
                  </h2>
                  <p className="opacity-90 text-sm sm:text-base truncate">{item.company}</p>

                  {/* Dates */}
                  <p className="text-xs sm:text-sm opacity-70">
                    Issued {item.start}{item.end ? ` · ${item.end}` : ''}
                  </p>

                  {/* Credential ID (head inline + tail in absolute tooltip) */}
                  {fullId && (
                    <p className="text-[0.7rem] sm:text-xs mt-1 opacity-70">
                      Credential ID:{' '}
                      <span
                        className="group inline-flex items-center font-mono relative"
                        aria-label={`Credential ID: ${fullId}`}
                        title={fullId}
                        tabIndex={0}
                      >
                        <span className="whitespace-nowrap">{idHead}</span>
                        {hasTail && (
                          <>
                            <span aria-hidden="true">..</span>
                          </>
                        )}
                      </span>
                    </p>
                  )}

                  {/* Tags */}
                  {item.technologies?.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-1">
                      {item.technologies.slice(0, 6).map((t) => (
                        <li
                          key={t}
                          className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-[0.7rem] sm:text-xs"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Verified badge (shrink-0 so it never gets pushed out) */}
                {hasLink && (
                  <span className="shrink-0 hidden sm:inline">
                    <span className="badge badge-outline">Verify <IconWorldShare size={20} /></span>
                  </span>
                )}
              </div>
            );

            return (
              <li key={item.slug} className="h-full w-full">
                {hasLink ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 group border-2 border-amber-500 text-amber-600 flex items-center h-full w-full justify-between p-3 sm:p-4 hover:bg-orange-500 hover:text-white hover:shadow-2xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
                    aria-label={`Verify credential: ${item.post} (${item.company})`}
                  >
                    {CardInner}
                  </a>
                ) : (
                  <div
                    className="group flex items-center bg-amber-500 h-full w-full justify-between p-3 sm:p-4 opacity-90 cursor-not-allowed"
                    aria-disabled="true"
                    title="Verification link unavailable"
                  >
                    {CardInner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
