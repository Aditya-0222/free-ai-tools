import { AITool } from '../types';

export const tools: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for conversation and content generation',
    url: 'https://chat.openai.com',
    category: 'Language Models',
    image: 'https://images.unsplash.com/photo-1676299081847-c0326a0333d5?auto=format&fit=crop&q=80&w=800',
    features: ['Text Generation', 'Conversation', 'Code Assistance', 'Writing Help']
  },
  {
    id: '2',
    name: 'Stable Diffusion',
    description: 'Free, open-source image generation model',
    url: 'https://stability.ai',
    category: 'Image Generation',
    image: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?auto=format&fit=crop&q=80&w=800',
    features: ['Image Generation', 'Image Editing', 'Style Transfer']
  },
  {
    id: '3',
    name: 'Hugging Face',
    description: 'Platform for machine learning models and datasets',
    url: 'https://huggingface.co',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    features: ['Model Hosting', 'Datasets', 'APIs', 'Community']
  },
  {
    id: '4',
    name: 'Claude',
    description: 'Advanced AI assistant for analysis and content creation',
    url: 'https://claude.ai',
    category: 'Language Models',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    features: ['Long Context', 'Analysis', 'Writing', 'Research']
  },
  {
    id: '5',
    name: 'Midjourney',
    description: 'AI art generation through Discord',
    url: 'https://www.midjourney.com',
    category: 'Image Generation',
    image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80&w=800',
    features: ['Art Generation', 'Creative Tools', 'Discord Integration']
  },
  {
    id: '6',
    name: 'Otter.ai',
    description: 'AI-powered transcription and note-taking',
    url: 'https://otter.ai',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?auto=format&fit=crop&q=80&w=800',
    features: ['Transcription', 'Meeting Notes', 'Voice Recognition']
  },
  {
    id: '7',
    name: 'Copy.ai',
    description: 'AI copywriting and content generation',
    url: 'https://www.copy.ai',
    category: 'Writing',
    image: 'https://images.unsplash.com/photo-1682687221175-9875b4d2a15e?auto=format&fit=crop&q=80&w=800',
    features: ['Copywriting', 'Marketing Content', 'Social Media']
  },
  {
    id: '8',
    name: 'RunwayML',
    description: 'AI-powered video editing and generation',
    url: 'https://runwayml.com',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&q=80&w=800',
    features: ['Video Editing', 'Motion Graphics', 'Green Screen']
  },
  {
    id: '9',
    name: 'Jasper',
    description: 'AI content creation platform',
    url: 'https://www.jasper.ai',
    category: 'Writing',
    image: 'https://images.unsplash.com/photo-1682687221038-404670f05144?auto=format&fit=crop&q=80&w=800',
    features: ['Blog Writing', 'Marketing Copy', 'SEO Content']
  },
  {
    id: '10',
    name: 'Synthesia',
    description: 'AI video generation with avatars',
    url: 'https://www.synthesia.io',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1682687220067-63c244a9f19c?auto=format&fit=crop&q=80&w=800',
    features: ['Video Creation', 'Avatar Generation', 'Text to Speech']
  },
  {
    id: '11',
    name: 'Descript',
    description: 'AI-powered audio and video editing',
    url: 'https://www.descript.com',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?auto=format&fit=crop&q=80&w=800',
    features: ['Audio Editing', 'Transcription', 'Podcast Tools']
  },
  {
    id: '12',
    name: 'Murf',
    description: 'AI voice generator and text-to-speech platform',
    url: 'https://murf.ai',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1682687221248-3116ba6ab483?auto=format&fit=crop&q=80&w=800',
    features: ['Voice Generation', 'Text to Speech', 'Voice Cloning']
  },
  {
    id: '13',
    name: 'Tome',
    description: 'AI-powered storytelling and presentation platform',
    url: 'https://tome.app',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=800',
    features: ['Presentations', 'Storytelling', 'Content Generation']
  },
  {
    id: '14',
    name: 'Beautiful.ai',
    description: 'AI-powered presentation design',
    url: 'https://www.beautiful.ai',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1682687221123-c1961bc3c28b?auto=format&fit=crop&q=80&w=800',
    features: ['Presentation Design', 'Templates', 'Smart Slides']
  },
  {
    id: '15',
    name: 'Gamma',
    description: 'AI-powered presentation and document creation',
    url: 'https://gamma.app',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221203-d5bf269bcb43?auto=format&fit=crop&q=80&w=800',
    features: ['Presentations', 'Documents', 'Content Generation']
  },
  {
    id: '16',
    name: 'Canva',
    description: 'AI-enhanced design platform',
    url: 'https://www.canva.com',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?auto=format&fit=crop&q=80&w=800',
    features: ['Design Tools', 'Templates', 'Magic Edit']
  },
  {
    id: '17',
    name: 'Grammarly',
    description: 'AI writing assistant and grammar checker',
    url: 'https://www.grammarly.com',
    category: 'Writing',
    image: 'https://images.unsplash.com/photo-1682687221468-cf4f9ba21d66?auto=format&fit=crop&q=80&w=800',
    features: ['Grammar Check', 'Style Suggestions', 'Tone Detection']
  },
  {
    id: '18',
    name: 'QuillBot',
    description: 'AI writing and paraphrasing tool',
    url: 'https://quillbot.com',
    category: 'Writing',
    image: 'https://images.unsplash.com/photo-1682687221213-56e250b36fdd?auto=format&fit=crop&q=80&w=800',
    features: ['Paraphrasing', 'Grammar Check', 'Citation Generator']
  },
  {
    id: '19',
    name: 'Notion AI',
    description: 'AI-powered workspace and note-taking',
    url: 'https://www.notion.so',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221668-999d27dd2e2f?auto=format&fit=crop&q=80&w=800',
    features: ['Writing Assistant', 'Content Generation', 'Task Management']
  },
  {
    id: '20',
    name: 'Fireflies.ai',
    description: 'AI meeting assistant and transcription',
    url: 'https://fireflies.ai',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221623-28e1d76b9940?auto=format&fit=crop&q=80&w=800',
    features: ['Meeting Transcription', 'Search', 'Analytics']
  },
  {
    id: '21',
    name: 'Loom',
    description: 'AI-enhanced video messaging platform',
    url: 'https://www.loom.com',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1682687221173-b1b516329f6c?auto=format&fit=crop&q=80&w=800',
    features: ['Video Recording', 'Transcription', 'Analytics']
  },
  {
    id: '22',
    name: 'Pictory',
    description: 'AI video creation from long-form content',
    url: 'https://pictory.ai',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1682687221183-c6b0f8e35e8c?auto=format&fit=crop&q=80&w=800',
    features: ['Video Creation', 'Content Repurposing', 'Subtitles']
  },
  {
    id: '23',
    name: 'Kapwing',
    description: 'Online video editor with AI features',
    url: 'https://www.kapwing.com',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1682687221193-dec524bd2a82?auto=format&fit=crop&q=80&w=800',
    features: ['Video Editing', 'Subtitles', 'Templates']
  },
  {
    id: '24',
    name: 'Soundraw',
    description: 'AI music generation platform',
    url: 'https://soundraw.io',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1682687221133-a28ea21f27dd?auto=format&fit=crop&q=80&w=800',
    features: ['Music Generation', 'Customization', 'Royalty Free']
  },
  {
    id: '25',
    name: 'Mubert',
    description: 'AI music streaming and generation',
    url: 'https://mubert.com',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1682687221143-c6b0f8e35e8d?auto=format&fit=crop&q=80&w=800',
    features: ['Music Generation', 'Streaming', 'API Access']
  },
  {
    id: '26',
    name: 'Riffusion',
    description: 'AI music generation through image diffusion',
    url: 'https://www.riffusion.com',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1682687221153-c6b0f8e35e8e?auto=format&fit=crop&q=80&w=800',
    features: ['Music Generation', 'Visual Interface', 'Real-time Generation']
  },
  {
    id: '27',
    name: 'Cleanup.pictures',
    description: 'AI-powered image cleanup and object removal',
    url: 'https://cleanup.pictures',
    category: 'Image Generation',
    image: 'https://images.unsplash.com/photo-1682687221163-c6b0f8e35e8f?auto=format&fit=crop&q=80&w=800',
    features: ['Object Removal', 'Background Removal', 'Image Restoration']
  },
  {
    id: '28',
    name: 'Remove.bg',
    description: 'AI background removal tool',
    url: 'https://www.remove.bg',
    category: 'Image Generation',
    image: 'https://images.unsplash.com/photo-1682687221173-c6b0f8e35e90?auto=format&fit=crop&q=80&w=800',
    features: ['Background Removal', 'Batch Processing', 'API Access']
  },
  {
    id: '29',
    name: 'Photosonic',
    description: 'AI art and image generation',
    url: 'https://photosonic.writesonic.com',
    category: 'Image Generation',
    image: 'https://images.unsplash.com/photo-1682687221183-c6b0f8e35e91?auto=format&fit=crop&q=80&w=800',
    features: ['Image Generation', 'Art Styles', 'Text to Image']
  },
  {
    id: '30',
    name: 'Leonardo.ai',
    description: 'AI-powered creative suite',
    url: 'https://leonardo.ai',
    category: 'Image Generation',
    image: 'https://images.unsplash.com/photo-1682687221193-c6b0f8e35e92?auto=format&fit=crop&q=80&w=800',
    features: ['Image Generation', 'Model Training', 'Asset Creation']
  },
  {
    id: '31',
    name: 'Perplexity AI',
    description: 'AI-powered search engine and research assistant',
    url: 'https://www.perplexity.ai',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1682687221203-c6b0f8e35e93?auto=format&fit=crop&q=80&w=800',
    features: ['Search', 'Research Assistant', 'Citation Generation']
  },
  {
    id: '32',
    name: 'You.com',
    description: 'AI-powered search engine',
    url: 'https://you.com',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1682687221213-c6b0f8e35e94?auto=format&fit=crop&q=80&w=800',
    features: ['Search', 'Chat', 'Code Generation']
  },
  {
    id: '33',
    name: 'Elicit',
    description: 'AI research assistant',
    url: 'https://elicit.org',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1682687221223-c6b0f8e35e95?auto=format&fit=crop&q=80&w=800',
    features: ['Literature Review', 'Paper Analysis', 'Research Summary']
  },
  {
    id: '34',
    name: 'Consensus',
    description: 'AI-powered research paper search engine',
    url: 'https://consensus.app',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1682687221233-c6b0f8e35e96?auto=format&fit=crop&q=80&w=800',
    features: ['Paper Search', 'Research Summary', 'Citation Analysis']
  },
  {
    id: '35',
    name: 'Phind',
    description: 'AI search engine for developers',
    url: 'https://www.phind.com',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221243-c6b0f8e35e97?auto=format&fit=crop&q=80&w=800',
    features: ['Code Search', 'Technical Q&A', 'Documentation Search']
  },
  {
    id: '36',
    name: 'GitHub Copilot',
    description: 'AI pair programmer',
    url: 'https://github.com/features/copilot',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221253-c6b0f8e35e98?auto=format&fit=crop&q=80&w=800',
    features: ['Code Completion', 'Code Generation', 'Documentation']
  },
  {
    id: '37',
    name: 'Codeium',
    description: 'Free AI coding assistant',
    url: 'https://codeium.com',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221263-c6b0f8e35e99?auto=format&fit=crop&q=80&w=800',
    features: ['Code Completion', 'Code Generation', 'Multi-IDE Support']
  },
  {
    id: '38',
    name: 'Tabnine',
    description: 'AI code completion assistant',
    url: 'https://www.tabnine.com',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221273-c6b0f8e35e9a?auto=format&fit=crop&q=80&w=800',
    features: ['Code Completion', 'Code Generation', 'Language Support']
  },
  {
    id: '39',
    name: 'Replicate',
    description: 'Platform for running AI models',
    url: 'https://replicate.com',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221283-c6b0f8e35e9b?auto=format&fit=crop&q=80&w=800',
    features: ['Model Hosting', 'API Access', 'Model Deployment']
  },
  {
    id: '40',
    name: 'Gradio',
    description: 'Create UIs for ML models',
    url: 'https://gradio.app',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221293-c6b0f8e35e9c?auto=format&fit=crop&q=80&w=800',
    features: ['UI Generation', 'Model Demo', 'API Creation']
  },
  {
    id: '41',
    name: 'Teachable Machine',
    description: 'Train ML models without code',
    url: 'https://teachablemachine.withgoogle.com',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221303-c6b0f8e35e9d?auto=format&fit=crop&q=80&w=800',
    features: ['Model Training', 'No-Code', 'Export Options']
  },
  {
    id: '42',
    name: 'Lobe',
    description: 'Train ML models with a visual interface',
    url: 'https://www.lobe.ai',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221313-c6b0f8e35e9e?auto=format&fit=crop&q=80&w=800',
    features: ['Model Training', 'Visual Interface', 'Export Options']
  },
  {
    id: '43',
    name: 'Roboflow',
    description: 'Computer vision model training',
    url: 'https://roboflow.com',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1682687221323-c6b0f8e35e9f?auto=format&fit=crop&q=80&w=800',
    features: ['Computer Vision', 'Dataset Management', 'Model Training']
  },
  {
    id: '44',
    name: 'Liner',
    description: 'AI research assistant and highlighter',
    url: 'https://getliner.com',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1682687221333-c6b0f8e35ea0?auto=format&fit=crop&q=80&w=800',
    features: ['Web Highlighting', 'Research Assistant', 'Knowledge Management']
  },
  {
    id: '45',
    name: 'Mem.ai',
    description: 'AI-powered personal knowledge base',
    url: 'https://mem.ai',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221343-c6b0f8e35ea1?auto=format&fit=crop&q=80&w=800',
    features: ['Note Taking', 'Knowledge Management', 'AI Assistant']
  },
  {
    id: '46',
    name: 'Reflect',
    description: 'AI note-taking and thinking tool',
    url: 'https://reflect.app',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221353-c6b0f8e35ea2?auto=format&fit=crop&q=80&w=800',
    features: ['Note Taking', 'Knowledge Graph', 'AI Assistant']
  },
  {
    id: '47',
    name: 'Taskade',
    description: 'AI-powered workspace',
    url: 'https://www.taskade.com',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221363-c6b0f8e35ea3?auto=format&fit=crop&q=80&w=800',
    features: ['Task Management', 'Notes', 'AI Assistant']
  },
  {
    id: '48',
    name: 'Bardeen',
    description: 'AI automation platform',
    url: 'https://www.bardeen.ai',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221373-c6b0f8e35ea4?auto=format&fit=crop&q=80&w=800',
    features: ['Automation', 'AI Assistant', 'Workflow']
  },
  {
    id: '49',
    name: 'Zapier',
    description: 'AI-powered automation platform',
    url: 'https://zapier.com',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221383-c6b0f8e35ea5?auto=format&fit=crop&q=80&w=800',
    features: ['Automation', 'Integration', 'AI Tools']
  },
  {
    id: '50',
    name: 'Make',
    description: 'Visual automation platform with AI',
    url: 'https://www.make.com',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1682687221393-c6b0f8e35ea6?auto=format&fit=crop&q=80&w=800',
    features: ['Automation', 'Integration', 'Visual Builder']
  },
  // Continue with more tools...
  {
    id: '100',
    name: 'Krisp',
    description: 'AI noise cancellation for calls',
    url: 'https://krisp.ai',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1682687220945-bc095c871dc6?auto=format&fit=crop&q=80&w=800',
    features: ['Noise Cancellation', 'Voice Enhancement', 'Meeting Tools']
  }
];

// Categories are dynamically generated from the tools
export const categories = [...new Set(tools.map(tool => tool.category))];