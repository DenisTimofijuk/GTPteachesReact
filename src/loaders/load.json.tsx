export async function loadJSON<T>(fileName: string) {
  const response = await fetch(`/db/${fileName}.json`);

  if (!response.ok) {
    throw Error(`Failed to fetch [${fileName}].`);
  }

  const data = (await response.json()) as T;

  return data;
}

export async function loadTeamsView() {
  const result: TeamsView[] = [];
  const tbl_user_content = await loadJSON<TBL_MEMBERS>("tbl_members");
  const tbl_teams_content = await loadJSON<TBL_TEAMS>("tbl_teams");

  tbl_teams_content.forEach((teamData) => {
    result.push({
      team_name: teamData.name,
      members: tbl_user_content.filter(
        (memberData) => memberData.team_id === teamData.id
      ),
    });
  });

  return result;
}

export async function loadMemberView() {
  const tbl_user_content = await loadJSON<TBL_MEMBERS>("tbl_members");
  const tbl_teams_content = await loadJSON<TBL_TEAMS>("tbl_teams");
  const tbl_observations_content = await loadJSON<TBL_OBSERVATIONS>("tbl_observations");

  const result = tbl_user_content.map((memberData) => {
    return {
      id: memberData.id,
      name: memberData.name,
      teamName: tbl_teams_content.find(
        (teamData) => teamData.id === memberData.team_id
      )?.name,
      observations: tbl_observations_content.filter(item => item.member_id === memberData.id)
    };
  });

  // const dellay = await new Promise((resolve, reject)=> setTimeout(resolve, 3500));
  
  return result;
}
