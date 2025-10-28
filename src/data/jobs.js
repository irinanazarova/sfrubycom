// Job postings data
export const jobs = {
  // Add jobs here
};

// Helper functions
export function getJob(jobId) {
  return jobs[jobId];
}

export function getAllJobs() {
  return Object.values(jobs);
}

export function getJobsBySponsor(sponsorId) {
  return Object.values(jobs).filter((job) => job.sponsorId === sponsorId);
}

export function getSortedJobs() {
  return Object.values(jobs).sort((a, b) => {
    // Sort by posted date, newest first
    return new Date(b.postedDate) - new Date(a.postedDate);
  });
}
