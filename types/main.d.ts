interface MemberData {
  name: string;
  id: string;
  team_id: string;
  registrationdate: string;
}

interface TeamData {
  name: string;
  id: string;
  registrationdate: string;
}

interface ObservationData {
  observation_name: string;
  comment: string;
  image: string;
  member_id: string;
  categorie: string;
  date: string;
  location: string;
}

interface CategoryData {
  name: string;
  id: string;
}

type TBL_CATEGORIES = CategoryData[];
type TBL_OBSERVATIONS = ObservationData[];
type TBL_TEAMS = TeamData[];
type TBL_MEMBERS = MemberData[];



type MemberView = {
  id:string;
  name: string;
  teamName: string | undefined;
  observations: ObservationData[];
}

type TeamsView = {
  team_name: string;
  members: Array<{
    name: string;
  }>;
};