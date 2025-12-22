import { ApiServer } from "@/app/lib/apiServer";
import TreadmillsTable from "./TreadmillsTable";

export default async function TreadmillsTableServer() {
    const treadmills = (await ApiServer.getTreadmills()) || [];
    return <TreadmillsTable treadmills={treadmills} />;
}
