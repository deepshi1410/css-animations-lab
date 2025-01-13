export const loadAnimations = async (category) => {
    switch (category) {
      case 'hover':
        return (await import('./hoverAnimations')).hoverAnimations;
      case 'loaders':
        return (await import('./loaderAnimations')).loaderAnimations;
      case 'text':
        return (await import('./textAnimations')).textAnimations;
      case 'transitions':
        return (await import('./transitionAnimations')).transitionAnimations;
      case 'advanced':
        return (await import('./advancedAnimations')).advancedAnimations;
      default:
        throw new Error(`Unknown animation category: ${category}`);
    }
  };
  