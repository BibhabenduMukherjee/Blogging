import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import {codeInput} from '@sanity/code-input'
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({
  basePath : "/studio",
  name: 'contentstudio',
  title: 'Codelify-Content-Studio',
  projectId : projectId,
  dataset : dataset,
  plugins: [deskTool(
    {defaultDocumentNode :getDefaultDocumentNode }
  ), visionTool(),codeInput()],

  schema: {
    types: schemaTypes,
  },
  studio : {
    components : {
      logo : Logo,
      navbar : StudioNavbar
    }
  },
  theme : myTheme
})
